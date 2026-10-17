#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
seo_update.py  (v2)
- URLs con .html en canonical y sitemap (excepto portada)
- Backup previo en backup_seo/
- Lee sin errors='ignore'; avisa si hay problema de codificacion
- noindex sin nofollow en respaldos
- Nombre de firma: CC&amp;A Abogados en HTML, CC&A en Python
"""
import re
import os
import shutil

BASE = 'https://www.ccacorporativolegal.com'
FIRMA = 'CC&amp;A Abogados'  # como se escribe en HTML

# ──────────────────────────────────────────────
# 1. META DATA POR PAGINA  (canonical con .html, excepto portada)
# ──────────────────────────────────────────────
SEO = {
    'index.html': {
        'title': f'CCA Abogados | Despacho Juridico en Ixtapaluca',
        'description': (
            'Firma de abogados especializada en derecho corporativo, inmobiliario, '
            'familiar y civil en Ixtapaluca, Estado de Mexico. 27 anos de trayectoria. '
            'Consulta sin costo.'
        ),
        'canonical': f'{BASE}/',
    },
    'servicios.html': {
        'title': f'Servicios Juridicos | CCA Abogados Ixtapaluca',
        'description': (
            'Asesoria en derecho corporativo, inmobiliario, familiar, civil, fiscal, '
            'administrativo, notarial y amparo. Soluciones legales integrales en Ixtapaluca.'
        ),
        'canonical': f'{BASE}/servicios.html',
    },
    'firma.html': {
        'title': f'La Firma | CC&A Abogados - Equipo y Trayectoria',
        'description': (
            'Conoce al equipo de CC&A Abogados: historia, valores, mision y 27 anos de '
            'experiencia en soluciones juridicas estrategicas en el Estado de Mexico.'
        ),
        'canonical': f'{BASE}/firma.html',
    },
    'capsula.html': {
        'title': f'Nuestra Historia | CC&A Abogados Ixtapaluca',
        'description': (
            'Descubre el origen y la evolucion de CC&A Abogados, firma fundada por la '
            'Dra. Miriam Constantino Castro con presencia en el sector publico, privado y social.'
        ),
        'canonical': f'{BASE}/capsula.html',
    },
    'faq.html': {
        'title': f'Preguntas Frecuentes | CC&A Abogados',
        'description': (
            'Resolvemos tus dudas mas comunes sobre tramites legales, notariales, '
            'corporativos e inmobiliarios. Respuestas claras de expertos en derecho en Ixtapaluca.'
        ),
        'canonical': f'{BASE}/faq.html',
    },
    'blog.html': {
        'title': f'Noticias Juridicas | CC&A Abogados',
        'description': (
            'Articulos, actualizaciones legales y novedades del sector juridico e '
            'inmobiliario en Mexico. Mantente informado con CC&A Abogados.'
        ),
        'canonical': f'{BASE}/blog.html',
    },
    'afiliaciones.html': {
        'title': f'Afiliaciones y Convenios | CC&A Abogados',
        'description': (
            'Conoce los convenios, membresias y programas de afiliacion de CC&A Abogados. '
            'Unete a nuestra red profesional y accede a beneficios exclusivos.'
        ),
        'canonical': f'{BASE}/afiliaciones.html',
    },
    'contacto.html': {
        'title': f'Contacto | CC&A Abogados Ixtapaluca',
        'description': (
            'Comunicate con CC&A Abogados en Ixtapaluca, Estado de Mexico. '
            'Telefono, correo electronico, mapa de ubicacion y formulario de contacto directo.'
        ),
        'canonical': f'{BASE}/contacto.html',
    },
    'vinculos.html': {
        'title': f'Vinculos de Interes Juridico | CC&A Abogados',
        'description': (
            'Directorio de organismos, instituciones y recursos juridicos de referencia '
            'seleccionados por CC&A Abogados para profesionales del derecho en Mexico.'
        ),
        'canonical': f'{BASE}/vinculos.html',
    },
    'only.html': {
        'title': f'Zona Abogados | Recursos y Productos | CC&A Abogados',
        'description': (
            'Acceso exclusivo para abogados y profesionistas del derecho. Recursos, '
            'productos y herramientas especializadas de CC&A Abogados en Ixtapaluca.'
        ),
        'canonical': f'{BASE}/only.html',
    },
    'privacidad.html': {
        'title': f'Aviso de Privacidad | CC&A Abogados',
        'description': (
            'Consulta el aviso de privacidad de CC&A Abogados. Conoce como recopilamos, '
            'usamos y protegemos tus datos personales conforme a la LFPDPPP.'
        ),
        'canonical': f'{BASE}/privacidad.html',
    },
    'terminos.html': {
        'title': f'Terminos y Condiciones | CC&A Abogados',
        'description': (
            'Lee los terminos y condiciones de uso del sitio web de CC&A Abogados. '
            'Informacion sobre derechos, responsabilidades y uso del contenido publicado.'
        ),
        'canonical': f'{BASE}/terminos.html',
    },
}

NOINDEX_FILES = [
    'servicios1.html',
    'afiliaciones-1.html',
    'blog-1.html',
    'respaldoindex.html',
]

# ──────────────────────────────────────────────
# 2. HELPERS
# ──────────────────────────────────────────────

def safe_read(path):
    """Lee el archivo; prueba UTF-8 luego latin-1. Lanza si falla."""
    for enc in ('utf-8', 'utf-8-sig', 'latin-1', 'cp1252'):
        try:
            with open(path, 'r', encoding=enc) as f:
                return f.read(), enc
        except (UnicodeDecodeError, LookupError):
            continue
    raise RuntimeError(f'No se pudo leer {path}: codificacion desconocida')


def safe_write(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)


def backup(path, backup_dir='backup_seo'):
    os.makedirs(backup_dir, exist_ok=True)
    dst = os.path.join(backup_dir, os.path.basename(path))
    shutil.copy2(path, dst)


def set_meta_tags(html, title, description, canonical):
    """Reemplaza o inserta <title>, description y canonical."""

    # --- <title> ---
    if re.search(r'<title[^>]*>', html, re.IGNORECASE):
        html = re.sub(
            r'<title[^>]*>.*?</title>',
            f'<title>{title}</title>',
            html, flags=re.IGNORECASE | re.DOTALL
        )
    else:
        html = re.sub(
            r'(<head[^>]*>)',
            f'\\1\n    <title>{title}</title>',
            html, count=1, flags=re.IGNORECASE
        )

    # --- meta description (orden: name= primero, content= primero) ---
    pat_nc = re.compile(
        r'<meta\s+name=["\']description["\']\s+content=["\'][^"\']*["\'][^>]*/?>',
        re.IGNORECASE
    )
    pat_cn = re.compile(
        r'<meta\s+content=["\'][^"\']*["\']\s+name=["\']description["\'][^>]*/?>',
        re.IGNORECASE
    )
    new_desc = f'<meta name="description" content="{description}">'
    if pat_nc.search(html):
        html = pat_nc.sub(new_desc, html)
    elif pat_cn.search(html):
        html = pat_cn.sub(new_desc, html)
    else:
        html = re.sub(
            r'(</title>)',
            f'\\1\n    {new_desc}',
            html, count=1, flags=re.IGNORECASE
        )

    # --- canonical ---
    pat_can = re.compile(r'<link\s+rel=["\']canonical["\'][^>]*/?>',re.IGNORECASE)
    new_can = f'<link rel="canonical" href="{canonical}">'
    if pat_can.search(html):
        html = pat_can.sub(new_can, html)
    else:
        html = re.sub(
            r'(<meta\s+name=["\']description["\'][^>]*/?>)',
            f'\\1\n    {new_can}',
            html, count=1, flags=re.IGNORECASE
        )

    return html


def add_noindex(html):
    """Agrega <meta name='robots' content='noindex'> si no existe ya."""
    if 'noindex' in html.lower():
        return html
    new_tag = '<meta name="robots" content="noindex">'
    if re.search(r'<head[^>]*>', html, re.IGNORECASE):
        html = re.sub(
            r'(<head[^>]*>)',
            f'\\1\n    {new_tag}',
            html, count=1, flags=re.IGNORECASE
        )
    else:
        # respaldoindex no tiene estructura HTML
        html = (
            '<!DOCTYPE html>\n<html lang="es">\n<head>\n'
            f'    <meta charset="UTF-8">\n    {new_tag}\n'
            '</head>\n<body>\n' + html + '\n</body>\n</html>\n'
        )
    return html


# ──────────────────────────────────────────────
# 3. PAGINAS PRINCIPALES
# ──────────────────────────────────────────────
print('=' * 60)
print('Actualizando paginas principales...')
print('=' * 60)

for filename, meta in SEO.items():
    if not os.path.exists(filename):
        print(f'  WARN  No encontrado: {filename}')
        continue
    try:
        html, enc = safe_read(filename)
    except RuntimeError as e:
        print(f'  ERROR {e}')
        continue
    backup(filename)
    updated = set_meta_tags(html, meta['title'], meta['description'], meta['canonical'])
    safe_write(filename, updated)
    print(f'  OK    {filename}  (leido como {enc})')

# ──────────────────────────────────────────────
# 4. ARCHIVOS DE RESPALDO -> noindex
# ──────────────────────────────────────────────
print()
print('Agregando noindex a respaldos...')

for filename in NOINDEX_FILES:
    if not os.path.exists(filename):
        print(f'  WARN  No encontrado: {filename}')
        continue
    try:
        html, enc = safe_read(filename)
    except RuntimeError as e:
        print(f'  ERROR {e}')
        continue
    backup(filename)
    updated = add_noindex(html)
    safe_write(filename, updated)
    print(f'  OK    {filename}  (leido como {enc})')

# ──────────────────────────────────────────────
# 5. SITEMAP.XML
# ──────────────────────────────────────────────
print()
print('Reescribiendo sitemap.xml...')

SITEMAP_URLS = [
    (f'{BASE}/',                        'monthly', '1.0'),
    (f'{BASE}/servicios.html',          'monthly', '0.9'),
    (f'{BASE}/firma.html',              'yearly',  '0.7'),
    (f'{BASE}/capsula.html',            'yearly',  '0.6'),
    (f'{BASE}/faq.html',                'monthly', '0.7'),
    (f'{BASE}/blog.html',               'weekly',  '0.8'),
    (f'{BASE}/afiliaciones.html',       'yearly',  '0.5'),
    (f'{BASE}/contacto.html',           'yearly',  '0.7'),
    (f'{BASE}/vinculos.html',           'monthly', '0.7'),
    (f'{BASE}/only.html',               'monthly', '0.5'),
    (f'{BASE}/privacidad.html',         'yearly',  '0.3'),
    (f'{BASE}/terminos.html',           'yearly',  '0.3'),
]

backup('sitemap.xml')
lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
]
for loc, freq, prio in SITEMAP_URLS:
    lines += [
        '  <url>',
        f'    <loc>{loc}</loc>',
        f'    <changefreq>{freq}</changefreq>',
        f'    <priority>{prio}</priority>',
        '  </url>',
    ]
lines.append('</urlset>')
safe_write('sitemap.xml', '\n'.join(lines) + '\n')
print(f'  OK    sitemap.xml  (12 URLs)')

# ──────────────────────────────────────────────
# 6. VERIFICACION
# ──────────────────────────────────────────────
print()
print('=' * 60)
print('Verificacion:')
print('=' * 60)
print(f'{"Archivo":<24}  {"T":>3}c  {"D":>3}c  Titulo')
print('-' * 60)
for filename in SEO:
    if not os.path.exists(filename):
        continue
    html, _ = safe_read(filename)
    m_t = re.search(r'<title[^>]*>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
    m_d = re.search(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']*)["\']', html, re.IGNORECASE)
    title   = m_t.group(1).strip() if m_t else 'SIN TITULO'
    d_len   = len(m_d.group(1)) if m_d else 0
    t_len   = len(title)
    ok      = 'OK' if m_t and m_d else 'FAIL'
    print(f'{ok}  {filename:<22}  {t_len:>3}c  {d_len:>3}c  {title[:42]}')

print()
print('Noindex en respaldos:')
for fn in NOINDEX_FILES:
    if not os.path.exists(fn):
        continue
    html, _ = safe_read(fn)
    ok = 'OK' if 'noindex' in html.lower() else 'FAIL'
    print(f'  {ok}  {fn}')

print()
print('Backup guardado en: backup_seo/')
print('Todo listo.')

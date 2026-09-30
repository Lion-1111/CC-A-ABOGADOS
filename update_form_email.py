import os
import glob
import re

dir_path = r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos'
html_files = ['index.html', 'capsula.html', 'contacto.html']

for filename in html_files:
    file = os.path.join(dir_path, filename)
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Change label from Teléfono to Correo electrónico (Gmail)
    if '<label>Tel&#233;fono</label>' in content:
        content = content.replace('<label>Tel&#233;fono</label>', '<label>Correo electr&#243;nico</label>')
        modified = True

    # 2. Change input type from tel to email, change id and placeholder
    if 'type="tel" id="wa-telefono" placeholder="222 123 4567"' in content:
        content = content.replace(
            'type="tel" id="wa-telefono" placeholder="222 123 4567"',
            'type="email" id="wa-email" placeholder="Ej. nombre@gmail.com"'
        )
        modified = True

    # 3. Change JS variable name and getElementById
    if "var tel = document.getElementById('wa-telefono').value;" in content:
        content = content.replace(
            "var tel = document.getElementById('wa-telefono').value;",
            "var email = document.getElementById('wa-email').value;"
        )
        modified = True

    # 4. Change the WhatsApp message line
    if "texto += '*Teléfono:* ' + tel + '\\n';" in content:
        content = content.replace(
            "texto += '*Teléfono:* ' + tel + '\\n';",
            "texto += '*Correo:* ' + email + '\\n';"
        )
        modified = True

    if modified:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filename}")
    else:
        print(f"No changes in {filename}")

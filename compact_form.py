import os

dir_path = r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos'

old_form_pattern = '''<form class="form-asesoria" id="form-whatsapp" onsubmit="enviarWhatsApp(event)">
                <div class="form-group">
                    <label>Nombre completo</label>
                    <input type="text" id="wa-nombre" placeholder="Ej. Juana P&#233;rez" required>
                </div>
                <div class="form-group">
                    <label>Correo electr&#243;nico</label>
                    <input type="email" id="wa-email" placeholder="Ej. nombre@gmail.com" required>
                </div>
                <div class="form-group">
                    <label>&#193;rea de inter&#233;s</label>
                    <select id="wa-area" required style="background:#1a1a1a;color:#ccc;border:none;border-bottom:1px solid #444;border-radius:8px;padding:14px 16px;width:100%;font-size:14px;outline:none;appearance:none;-webkit-appearance:none;">
                        <option value="" disabled selected>Seleccione...</option>
                        <option value="Corporativo">Derecho Corporativo</option>
                        <option value="Inmobiliario">Derecho Inmobiliario</option>
                        <option value="Patrimonial">Derecho Patrimonial</option>
                        <option value="Administrativo">Derecho Administrativo</option>
                        <option value="Ambiental">Derecho Ambiental</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Cu&#233;ntenos brevemente su situaci&#243;n</label>
                    <textarea id="wa-mensaje" placeholder="Ej. Necesito ayuda con un tr&#225;mite de divorcio..."></textarea>
                </div>
                <div class="form-group">
                    <label>Fecha preferida para la consulta</label>
                    <input type="date" id="wa-fecha" style="background:#1a1a1a;color:#ccc;border:none;border-bottom:1px solid #444;border-radius:8px;padding:14px 16px;width:100%;font-size:14px;outline:none;box-sizing:border-box;">
                </div>
                <p style="font-size:11px;color:#777;text-align:center;margin-bottom:12px;">Al hacer clic en &ldquo;Agendar mi asesor&#237;a&rdquo;, aceptas nuestros <a href="terminos.html" style="color:#b59a6a;">T&#233;rminos y Condiciones</a> y el <a href="privacidad.html" style="color:#b59a6a;">Aviso de Privacidad</a>. Tus datos viajan protegidos de extremo a extremo.</p>
                <button type="submit" class="btn-agendar">Agendar mi asesor&#237;a <i class="fas fa-arrow-right"></i></button>
                <div class="form-footer">
                    <i class="fas fa-lock"></i> La informaci&#243;n compartida es estrictamente confidencial.
                </div>
            </form>'''

new_form = '''<style>
                .form-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
                @media (max-width: 480px) { .form-2col { grid-template-columns: 1fr; } }
            </style>
            <form class="form-asesoria" id="form-whatsapp" onsubmit="enviarWhatsApp(event)">
                <div class="form-2col">
                    <div class="form-group" style="margin-bottom: 10px;">
                        <label style="font-size:11px; font-weight:700; color:#777; text-transform:uppercase; letter-spacing:0.5px;">Nombre completo</label>
                        <input type="text" id="wa-nombre" placeholder="Ej. Juana P&#233;rez" required style="padding:10px 12px; font-size:13px; border-radius:6px; border:1px solid #333;">
                    </div>
                    <div class="form-group" style="margin-bottom: 10px;">
                        <label style="font-size:11px; font-weight:700; color:#777; text-transform:uppercase; letter-spacing:0.5px;">Correo electr&#243;nico</label>
                        <input type="email" id="wa-email" placeholder="nombre@gmail.com" required style="padding:10px 12px; font-size:13px; border-radius:6px; border:1px solid #333;">
                    </div>
                </div>
                <div class="form-2col">
                    <div class="form-group" style="margin-bottom: 10px;">
                        <label style="font-size:11px; font-weight:700; color:#777; text-transform:uppercase; letter-spacing:0.5px;">&#193;rea de inter&#233;s</label>
                        <select id="wa-area" required style="background:#1a1a1a;color:#ccc;border:1px solid #333;border-radius:6px;padding:10px 12px;width:100%;font-size:13px;outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;">
                            <option value="" disabled selected>Seleccione...</option>
                            <option value="Corporativo">Corporativo</option>
                            <option value="Inmobiliario">Inmobiliario</option>
                            <option value="Patrimonial">Patrimonial</option>
                            <option value="Administrativo">Administrativo</option>
                            <option value="Ambiental">Ambiental</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div class="form-group" style="margin-bottom: 10px;">
                        <label style="font-size:11px; font-weight:700; color:#777; text-transform:uppercase; letter-spacing:0.5px;">Fecha preferida</label>
                        <input type="date" id="wa-fecha" style="background:#1a1a1a;color:#ccc;border:1px solid #333;border-radius:6px;padding:9px 12px;width:100%;font-size:13px;outline:none;box-sizing:border-box;">
                    </div>
                </div>
                <div class="form-group" style="margin-bottom: 10px;">
                    <label style="font-size:11px; font-weight:700; color:#777; text-transform:uppercase; letter-spacing:0.5px;">Cu&#233;ntenos su situaci&#243;n</label>
                    <textarea id="wa-mensaje" placeholder="Ej. Necesito ayuda con un tr&#225;mite de divorcio..." style="min-height:60px; padding:10px 12px; font-size:13px; border-radius:6px; border:1px solid #333; resize:none;"></textarea>
                </div>
                <p style="font-size:10px;color:#777;text-align:center;margin-bottom:10px;line-height:1.4;">Al hacer clic en &ldquo;Agendar&rdquo;, aceptas nuestros <a href="terminos.html" style="color:#b59a6a;">T&#233;rminos</a> y <a href="privacidad.html" style="color:#b59a6a;">Aviso de Privacidad</a>.</p>
                <button type="submit" class="btn-agendar" style="padding:12px; border-radius:6px; font-size:14px; margin-top:0;">Agendar mi asesor&#237;a <i class="fas fa-arrow-right"></i></button>
                <div class="form-footer" style="margin-top:10px; font-size:10px;">
                    <i class="fas fa-lock"></i> La informaci&#243;n compartida es estrictamente confidencial.
                </div>
            </form>'''

files = ['index.html', 'capsula.html', 'contacto.html']
for filename in files:
    filepath = os.path.join(dir_path, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if old_form_pattern in content:
        content = content.replace(old_form_pattern, new_form)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filename}")
    else:
        print(f"Pattern not found exactly in {filename}")

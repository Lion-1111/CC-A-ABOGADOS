import re, glob

# New WhatsApp default message
new_whatsapp_text = 'Hola,%20me%20gustaría%20recibir%20asesoría%20legal.'

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove phone button block completely
    content = re.sub(r'<div class="d-block d-md-none">\s*<a[^>]*class="phone-button[^>]*>.*?</a>\s*</div>', '', content, flags=re.IGNORECASE | re.DOTALL)
    content = re.sub(r'<a[^>]*class="phone-button[^>]*>.*?</a>', '', content, flags=re.IGNORECASE | re.DOTALL)
    
    # Update the WhatsApp default message
    content = content.replace('hola,%20¿qué%20tal%20estás?', new_whatsapp_text)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("HTML updated!")

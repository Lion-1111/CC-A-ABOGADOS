import re, glob
for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove phone button block
    content = re.sub(r'<div class="d-block d-md-none">\s*<a target="_blan?k"[^>]*class="phone-button[^>]*>.*?</a>\s*</div>', '', content, flags=re.IGNORECASE | re.DOTALL)
    
    # Remove any leftover phone-button tags
    content = re.sub(r'<a target="_blan?k"[^>]*class="phone-button[^>]*>.*?</a>', '', content, flags=re.IGNORECASE | re.DOTALL)
    
    # Add title to whatsapp button (if not already there to avoid duplicates)
    if 'title="Respondemos' not in content:
        content = re.sub(r'(class="whatsapp-button)', r'title="Respondemos en menos de 24 hrs" \1', content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print("Fix applied successfully!")

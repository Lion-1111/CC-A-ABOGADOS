import os
import glob
import re

dir_path = r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos'
html_files = glob.glob(os.path.join(dir_path, '*.html'))

tiktok_html = """                <a href="https://www.instagram.com/cca_abogados/">
                    <img src="./assets/img/social-network/instagram.png" width="30" alt="" />
                </a>
                <a href="https://www.tiktok.com/@ccaabogados?_r=1&_t=ZS-99uMjrD3rip">
                    <i class="fab fa-tiktok" style="font-size: 30px; color: #fff; margin: 0 10px; vertical-align: middle;"></i>
                </a>"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    # Change footer background color to a warmer, slightly lighter tone (#2d241e)
    new_content = re.sub(r'<footer style="background-color:#000 !important(;?.*?)"', r'<footer style="background-color:#2d241e !important\1"', content)
    if new_content != content:
        content = new_content
        modified = True
        
    # Also change the dark header in contacto.html if it's there
    new_content = content.replace('background-image: url(./assets/img/banners/Banner_2_3.jpg)', 'background-color: #2d241e; background-image: none;')
    if new_content != content:
        content = new_content
        modified = True

    # Add Tiktok icon after Instagram
    if 'instagram.png' in content and 'fa-tiktok' not in content:
        # Regex to find instagram link and replace it with instagram + tiktok
        pattern = r'<a href="[^"]*instagram[^"]*">\s*<img src="\./assets/img/social-network/instagram\.png"[^>]*>\s*</a>'
        match = re.search(pattern, content)
        if match:
            original = match.group(0)
            new_html = original + '\n                <a href="https://www.tiktok.com/@ccaabogados?_r=1&_t=ZS-99uMjrD3rip" style="margin-left: 10px; text-decoration: none;">\n                    <i class="fab fa-tiktok" style="font-size: 26px; color: #fff; vertical-align: middle;"></i>\n                </a>'
            content = content.replace(original, new_html)
            modified = True
            
    if modified:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {os.path.basename(file)}")

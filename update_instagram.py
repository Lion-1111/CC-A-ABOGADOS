import os
import glob
import re

dir_path = r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos'
html_files = glob.glob(os.path.join(dir_path, '*.html'))

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    # Replace instagram.png with FontAwesome icon
    if 'instagram.png' in content:
        content = re.sub(
            r'<img src="\./assets/img/social-network/instagram\.png"[^>]*>',
            r'<i class="fab fa-instagram" style="font-size: 30px; color: #fff; margin: 0 5px; vertical-align: middle;"></i>',
            content
        )
        modified = True
        
    # Make tiktok icon 30px to match instagram
    if 'fa-tiktok" style="font-size: 26px' in content:
        content = content.replace('fa-tiktok" style="font-size: 26px', 'fa-tiktok" style="font-size: 30px')
        modified = True
        
    if modified:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {os.path.basename(file)}")

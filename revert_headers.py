import os
import glob
import re

dir_path = r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos'
html_files = glob.glob(os.path.join(dir_path, '*.html'))

# The bad string I put in the files
bad_bg_pattern = r'background-color:\s*#2d241e;\s*background-image:\s*url\(\./assets/img/banners/Banner_2_3\.jpg\);\s*background-size:\s*100%;\s*background-position-y:\s*35%;\s*background-blend-mode:\s*lighten;'
original_bg_style = 'background-image: url(./assets/img/banners/Banner_2_3.jpg);background-size: 100%;background-position-y: 35%;'

for file in html_files:
    # Skip contacto.html because we DO want the contact section there to have the lighter/warmer tone
    if 'contacto.html' in file:
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    if re.search(bad_bg_pattern, content):
        content = re.sub(bad_bg_pattern, original_bg_style, content)
        modified = True
        
    # Also if there's any lingering 'background-color: #2d241e; background-image: none;'
    bad_bg_pattern_2 = r'background-color:\s*#2d241e;\s*background-image:\s*none;;background-size:\s*100%;background-position-y:\s*35%;'
    if re.search(bad_bg_pattern_2, content):
        content = re.sub(bad_bg_pattern_2, original_bg_style, content)
        modified = True

    if modified:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Reverted {os.path.basename(file)}")

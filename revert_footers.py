import os
import glob
import re

dir_path = r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos'
html_files = glob.glob(os.path.join(dir_path, '*.html'))

for file in html_files:
    if 'contacto.html' in file:
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    # Revert footer background color back to #000
    if 'background-color:#2d241e !important' in content:
        content = content.replace('background-color:#2d241e !important', 'background-color:#000 !important')
        modified = True
        
    if modified:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Reverted footer color in {os.path.basename(file)}")

# Also fix styles.css
css_file = os.path.join(dir_path, 'assets', 'css', 'styles.css')
with open(css_file, 'r', encoding='utf-8') as f:
    css_content = f.read()

if 'background-color: #2d241e !important;' in css_content:
    css_content = css_content.replace('background-color: #2d241e !important;', 'background-color: #000 !important;')
    with open(css_file, 'w', encoding='utf-8') as f:
        f.write(css_content)
    print("Reverted styles.css")

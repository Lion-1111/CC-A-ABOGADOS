import os
import glob
import re

dir_path = r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos'
html_files = glob.glob(os.path.join(dir_path, '*.html'))

social_html = """                <a href="https://www.facebook.com/abogadoscca/?locale=es_LA" style="text-decoration: none;">
                    <i class="fab fa-facebook" style="font-size: 30px; color: #1877F2; margin: 0 8px; vertical-align: middle;"></i>
                </a>
                <a href="https://twitter.com/castro_despacho" style="text-decoration: none;">
                    <i class="fab fa-twitter" style="font-size: 30px; color: #1DA1F2; margin: 0 8px; vertical-align: middle;"></i>
                </a>
                <a href="https://www.instagram.com/cca_abogados/" style="text-decoration: none;">
                    <i class="fab fa-instagram" style="font-size: 30px; color: #E1306C; margin: 0 8px; vertical-align: middle;"></i>
                </a>
                <a href="https://www.tiktok.com/@ccaabogados?_r=1&_t=ZS-99uMjrD3rip" style="text-decoration: none;">
                    <i class="fab fa-tiktok" style="font-size: 30px; color: #ffffff; text-shadow: 1.5px 1.5px 0 #ff0050, -1.5px -1.5px 0 #00f2fe; margin: 0 8px; vertical-align: middle;"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC4dOqk-nOPwqfpGVDKDreoQ" style="text-decoration: none;">
                    <i class="fab fa-youtube" style="font-size: 30px; color: #FF0000; margin: 0 8px; vertical-align: middle;"></i>
                </a>\n            </div>"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Target files that failed: blog-1.html, blog.html, privacidad.html, respaldoindex.html, terminos.html
    # Some files were already updated, so we check if they have fa-facebook. 
    # But wait, we can just run a new regex for files that don't have the updated color facebook icon:
    if 'color: #1877F2' not in content:
        pattern = r'<a href="https://www\.facebook\.com/abogadoscca/.*?</a\s*>\s*</div\s*>'
        new_content = re.sub(pattern, social_html, content, flags=re.DOTALL)
        
        if new_content != content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(file)}")
        else:
            print(f"No match found in {os.path.basename(file)}")

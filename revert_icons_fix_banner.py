import os
import glob
import re

dir_path = r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos'
html_files = glob.glob(os.path.join(dir_path, '*.html'))

social_html = """                <a href="https://www.facebook.com/abogadoscca/?locale=es_LA"><img src="./assets/img/social-network/icons8-facebook.svg" class="mr-3 mb-2" width="30" alt="" /></a>
                <a href="https://twitter.com/castro_despacho">
                    <img src="./assets/img/social-network/icons8-twitter.svg" width="30" alt="" />
                </a>
                <a href="https://www.instagram.com/cca_abogados/" style="text-decoration: none;">
                    <i class="fab fa-instagram" style="font-size: 30px; color: #fff; margin: 0 8px; vertical-align: middle;"></i>
                </a>
                <a href="https://www.tiktok.com/@ccaabogados?_r=1&_t=ZS-99uMjrD3rip" style="text-decoration: none;">
                    <i class="fab fa-tiktok" style="font-size: 30px; color: #fff; margin: 0 8px; vertical-align: middle;"></i>
                </a>
                <!--<a href="https://www.linkedin.com/in/constantinocastro-asociados-a1402a1b5/">
                    <img src="./assets/img/social-network/linkedin.png" width="30" alt="" />
                </a>-->
                <a href="https://www.youtube.com/channel/UC4dOqk-nOPwqfpGVDKDreoQ">
                    <img src="./assets/img/social-network/youtube.png" width="30" alt="" />
                </a>
            </div>"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modified = False
    
    # Replace the colored icons block back to the original white ones (plus Tiktok)
    pattern = r'<a href="https://www\.facebook\.com/abogadoscca/\?locale=es_LA"[^>]*>.*?<a href="https://www\.youtube\.com/channel/UC4dOqk-nOPwqfpGVDKDreoQ"[^>]*>.*?</a\s*>\s*</div\s*>'
    new_content = re.sub(pattern, social_html, content, flags=re.DOTALL)
    if new_content != content:
        content = new_content
        modified = True
        
    # Also, some files might still have the very original block if they were missed.
    # We will just replace it again to be safe.
    pattern_original = r'<a href="https://www\.facebook\.com/abogadoscca/\?locale=es_LA">.*?<img src="\./assets/img/social-network/youtube\.png" width="30" alt="" />\s*</a>\s*</div>'
    new_content_orig = re.sub(pattern_original, social_html, content, flags=re.DOTALL)
    if new_content_orig != content:
        content = new_content_orig
        modified = True

    # Restore the contact banner with the image, but use blend-mode to lighten it!
    # The previous script did: 'background-color: #2d241e; background-image: none;;background-size: 100%;background-position-y: 35%;'
    bad_bg_pattern = r'background-color:\s*#2d241e;\s*background-image:\s*none;;background-size:\s*100%;background-position-y:\s*35%;'
    if re.search(bad_bg_pattern, content):
        content = re.sub(bad_bg_pattern, 'background-color: #2d241e; background-image: url(./assets/img/banners/Banner_2_3.jpg); background-size: 100%; background-position-y: 35%; background-blend-mode: lighten;', content)
        modified = True
        
    # Also if it's the original one (missed by previous script)
    orig_bg_pattern = r'background-image:\s*url\(\./assets/img/banners/Banner_2_3\.jpg\);background-size:\s*100%;background-position-y:\s*35%;'
    if re.search(orig_bg_pattern, content):
        content = re.sub(orig_bg_pattern, 'background-color: #2d241e; background-image: url(./assets/img/banners/Banner_2_3.jpg); background-size: 100%; background-position-y: 35%; background-blend-mode: lighten;', content)
        modified = True

    if modified:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {os.path.basename(file)}")

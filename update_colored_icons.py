import os
import glob
import re

dir_path = r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos'
html_files = glob.glob(os.path.join(dir_path, '*.html'))

# New HTML for the social icons
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
                </a>"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We need to find the block containing the social links and replace it.
    # The block starts at <a href="https://www.facebook.com/abogadoscca/?locale=es_LA">
    # and ends after the youtube link </a>
    
    pattern = r'<a href="https://www\.facebook\.com/abogadoscca/\?locale=es_LA">.*?<a href="https://www\.youtube\.com/channel/UC4dOqk-nOPwqfpGVDKDreoQ">.*?</a>'
    
    new_content = re.sub(pattern, social_html, content, flags=re.DOTALL)
    
    # Wait, some pages might have different formatting. Let's try to match the container.
    # We know it's in a <div class="col-12 text-center"> inside the footer.
    # We can be more flexible.
    if new_content == content:
        # Try a more relaxed pattern
        pattern2 = r'<a href="https://www\.facebook\.com/abogadoscca/[^>]*>.*?youtube\.com/channel/UC4dOqk-nOPwqfpGVDKDreoQ"[^>]*>.*?</a>'
        new_content = re.sub(pattern2, social_html, content, flags=re.DOTALL)

    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(file)}")
    else:
        print(f"No match found in {os.path.basename(file)}")

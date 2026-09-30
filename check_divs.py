import re
with open(r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos\firma.html', 'r', encoding='utf-8') as f:
    content = f.read()
# Let's count divs
start_divs = content.count('<div')
end_divs = content.count('</div')
print(f"Start divs: {start_divs}, End divs: {end_divs}")

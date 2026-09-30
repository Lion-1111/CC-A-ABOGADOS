import re
with open(r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos\index.html', 'r', encoding='utf-8') as f:
    content = f.read()
start_divs = content.count('<div')
end_divs = content.count('</div')
print(f"Index - Start divs: {start_divs}, End divs: {end_divs}")

with open(r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos\blog.html', 'r', encoding='utf-8') as f:
    content2 = f.read()
start_divs2 = content2.count('<div')
end_divs2 = content2.count('</div')
print(f"Blog - Start divs: {start_divs2}, End divs: {end_divs2}")

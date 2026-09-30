import re

with open(r'c:\Users\leona\Downloads\Trabajos de paginas web\cca_archivos\firma.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's find the unclosed div by tracking line numbers
div_stack = []
for i, line in enumerate(content.split('\n')):
    # find all <div and </div
    starts = re.findall(r'<div\b', line, re.IGNORECASE)
    ends = re.findall(r'</div\b', line, re.IGNORECASE)
    
    for _ in starts:
        div_stack.append(i + 1)
    for _ in ends:
        if div_stack:
            div_stack.pop()
        else:
            print(f"Unmatched closing div on line {i + 1}")

print(f"Unclosed divs opened on lines: {div_stack}")

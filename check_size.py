from PIL import Image
import sys

files = [
    'assets/img/galardon-concaem-2026.jpg',
    'assets/img/impacto-global.jpg',
    'assets/img/dra-atril.jpg',
    'assets/img/dra-oficina-final.png'
]

for f in files:
    try:
        print(f"{f}: {Image.open(f).size}")
    except Exception as e:
        print(f"Error with {f}: {e}")

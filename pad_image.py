from PIL import Image, ImageFilter
import sys

def letterbox_blur(image_path, target_ratio=4/3):
    img = Image.open(image_path)
    w, h = img.size
    
    # Calculate target dimensions
    target_w = int(h * target_ratio)
    target_h = h
    
    if target_w < w:
        # If the image is already wider than the target ratio, don't pad horizontally
        return
        
    # Create the background by resizing and blurring the original image
    bg = img.resize((target_w, target_h))
    bg = bg.filter(ImageFilter.GaussianBlur(50))
    
    # Paste the original image in the center
    offset = ((target_w - w) // 2, 0)
    bg.paste(img, offset)
    
    bg.save(image_path)
    print(f"Processed {image_path}, new size: {bg.size}")

letterbox_blur('assets/img/galardon-concaem-2026.jpg')

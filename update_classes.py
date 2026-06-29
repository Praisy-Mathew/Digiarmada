import re

html = open('index.html', 'r', encoding='utf-8').read()

# Update thumbnails
html = re.sub(r'<div class="swiper-slide blue-color1">', r'<div class="swiper-slide green-color1">', html) # Slide 1: Logo Blue
html = re.sub(r'<div class="swiper-slide skyblue-color1">', r'<div class="swiper-slide blue-color1">', html) # Slide 3: Purple
html = re.sub(r'<div class="swiper-slide brandBlue-color1">', r'<div class="swiper-slide green-color1">', html) # Slide 4: Logo Blue
html = re.sub(r'<div class="swiper-slide green-color1">CRM Development', r'<div class="swiper-slide orange-color1">CRM Development', html) # Slide 5: Orange
html = re.sub(r'<div class="swiper-slide lightOrange-color1">', r'<div class="swiper-slide blue-color1">', html) # Slide 6: Purple

# Update tabs
html = re.sub(r'<div class="tab-box blue-color">', r'<div class="tab-box green-color">', html, count=1) # Slide 1
html = re.sub(r'<div class="tab-box skyblue-color">', r'<div class="tab-box blue-color">', html) # Slide 3
html = re.sub(r'<div class="tab-box brandBlue-color">', r'<div class="tab-box green-color">', html) # Slide 4
html = re.sub(r'<div class="tab-box green-color">\s*<img src="images/bg-pic22', r'<div class="tab-box orange-color">\n                    <img src="images/bg-pic22', html) # Slide 5
html = re.sub(r'<div class="tab-box lightOrange-color">', r'<div class="tab-box blue-color">', html) # Slide 6

open('index.html', 'w', encoding='utf-8').write(html)
print('Updated index.html to use the 3 classes')

import os
import re

patterns = [
    r'\s*<li><a href="about-us\.html">About Us</a></li>',
    r'\s*<li><a href="process\.html">Our Process</a></li>',
    r'\s*<li[^>]*><a href="about-us\.html"[^>]*><i[^>]*></i>About Us</a></li>',
    r'\s*<li[^>]*><a href="process\.html"[^>]*><i[^>]*></i>Our Process</a></li>'
]

files_changed = []

for f in os.listdir('.'):
    if f.endswith('.html'):
        try:
            content = open(f, 'r', encoding='utf-8').read()
            new_content = content
            
            for p in patterns:
                new_content = re.sub(p, '', new_content, flags=re.IGNORECASE)
                
            if new_content != content:
                open(f, 'w', encoding='utf-8').write(new_content)
                files_changed.append(f)
        except Exception as e:
            pass

print('Changed files:', files_changed)

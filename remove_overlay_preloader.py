import os
import re

html_pattern = re.compile(r'\s*<div class="overlay first"></div>\s*<div class="overlay second"></div>\s*<div class="overlay third"></div>', re.MULTILINE)

files_updated = []
for f in os.listdir('.'):
    if f.endswith('.html'):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        orig_content = content
        content = re.sub(html_pattern, '', content)
        
        if orig_content != content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            files_updated.append(f)

print('Updated files:', files_updated)

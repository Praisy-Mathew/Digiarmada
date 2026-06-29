import os
import re

html_pattern = re.compile(r'\s*<div id="loading2">\s*<div class="load"></div>\s*</div>', re.MULTILINE)
js_pattern = re.compile(r'\s*//loader.*?console\.log\("loaded"\)', re.MULTILINE | re.DOTALL)
js_pattern_fallback = re.compile(r'\s*const loader = document\.querySelector\(\'#loading2\'\).*?loader\.style\.visibility = "hidden";', re.MULTILINE | re.DOTALL)

files_updated = []
for f in os.listdir('.'):
    if f.endswith('.html'):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        orig_content = content
        content = re.sub(html_pattern, '', content)
        content = re.sub(js_pattern, '', content)
        content = re.sub(js_pattern_fallback, '', content)
        
        if orig_content != content:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            files_updated.append(f)

print('Updated files:', files_updated)

import os
import re

target_regex = r'(<div class="copyrights"[^>]*>)\s*(<p style="color: #666; margin: 0; font-size: 14px; letter-spacing: 0\.5px;">Designed By)'
replacement = r'\1\n    <p style="color: #666; margin: 0 0 10px 0; font-size: 14px; letter-spacing: 0.5px;">DigiArmada Ltd is a company registered in England and Wales (Company No. 17235230)</p>\n    \2'

files_changed = []

for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            try:
                content = open(filepath, 'r', encoding='utf-8').read()
                
                new_content = re.sub(target_regex, replacement, content, flags=re.IGNORECASE)
                
                if new_content != content:
                    open(filepath, 'w', encoding='utf-8').write(new_content)
                    files_changed.append(filepath)
            except Exception as e:
                print(e)
                pass

print('Changed files:', files_changed)

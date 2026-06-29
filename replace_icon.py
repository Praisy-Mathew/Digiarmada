import os
import re

pattern = re.compile(r'<img[^>]*src=[\"\']images/menu-icon-black\.png[\"\'][^>]*>', re.IGNORECASE)
replacement = '<i class=\"fas fa-bars\" style=\"font-size: 28px; cursor: pointer; color: #1c3a5e;\"></i>'

files_changed = []

for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            try:
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                new_content = pattern.sub(replacement, content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    files_changed.append(filepath)
            except Exception as e:
                print(e)
                pass

print('Changed files:', files_changed)

import os
import re

target = r'<i class="fas fa-bars" style="font-size: 28px; cursor: pointer; color: #1c3a5e;"></i>'
replacement = r'<i class="fas fa-bars" style="font-size: 28px; cursor: pointer; color: #000;"></i>'

files_changed = []

for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            try:
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                new_content = content.replace(target, replacement)
                
                # Check for process.html specifically as it might have different styling
                # Wait, I also need to check if there is any other variant. Let's just do a generic regex.
                
                generic_target = r'(<i class="fas fa-bars" style="font-size: 28px; cursor: pointer; color: )#1c3a5e(;?"></i>)'
                generic_replacement = r'\g<1>#000\g<2>'
                new_content = re.sub(generic_target, generic_replacement, new_content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    files_changed.append(filepath)
            except Exception as e:
                pass

print('Changed files:', files_changed)

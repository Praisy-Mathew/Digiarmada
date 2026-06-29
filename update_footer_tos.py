import os
import re

target_string = r'(<li[^>]*><a href=\"privacy-policy\.html\"[^>]*><i[^>]*></i>Privacy Policy</a></li>)\s*(</ul>)'
replacement_string = r'\1\n          <li style="margin-bottom: 15px;"><a href="terms-of-service.html" style="color: #bbb; text-decoration: none; transition: color 0.3s; display: inline-block;"><i class="fas fa-chevron-right" style="font-size: 12px; color: #1c3a5e; margin-right: 8px;"></i>Terms of Service</a></li>\n        \2'

files_changed = []

for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            try:
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                new_content = re.sub(target_string, replacement_string, content, flags=re.IGNORECASE)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    files_changed.append(filepath)
            except Exception as e:
                pass

print('Changed files:', files_changed)

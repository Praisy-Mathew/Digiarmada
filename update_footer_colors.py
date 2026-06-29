import os
import re

phone_pattern = r'(<a href=\"tel:\+447554464385\" style=\"color:\s*)#1c3a5e(; text-decoration: none; font-weight: 600; display: block; margin-bottom: 5px;\">)'
email_pattern = r'(<a href=\"mailto:info@digiarmada\.co\.uk\" style=\"color:\s*)#1c3a5e(; text-decoration: none; font-weight: 600;\">)'

files_changed = []

for f in os.listdir('.'):
    if f.endswith('.html'):
        try:
            content = open(f, 'r', encoding='utf-8').read()
            new_content = re.sub(phone_pattern, r'\g<1>#ffffff\g<2>', content)
            new_content = re.sub(email_pattern, r'\g<1>#ffffff\g<2>', new_content)
            
            if new_content != content:
                open(f, 'w', encoding='utf-8').write(new_content)
                files_changed.append(f)
        except Exception as e:
            pass

print('Changed files:', files_changed)

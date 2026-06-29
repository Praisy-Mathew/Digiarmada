import os
import re

# String to remove
remove_str = r'\s*<p style="color: #666; margin: 0 0 10px 0; font-size: 14px; letter-spacing: 0\.5px;">DigiArmada Ltd is a company registered in England and Wales \(Company No\. 17235230\)</p>'

# String to replace in Column 1
col1_target = r'(Exceptional solutions without premium agency fees\.\s*</p>)'
col1_replacement = r'\1\n        <p style="color: #aaa; max-width: 320px; line-height: 1.8; font-size: 13px; margin-top: 15px; border-top: 1px solid #333; padding-top: 15px;">\n          <strong>DigiArmada Ltd</strong> is a company registered in England and Wales (Company No. 17235230)\n        </p>'

files_changed = []

for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            try:
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                # Remove from copyrights
                new_content = re.sub(remove_str, '', content)
                
                # Add to Column 1
                new_content = re.sub(col1_target, col1_replacement, new_content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    files_changed.append(filepath)
            except Exception as e:
                pass

print('Changed files:', files_changed)

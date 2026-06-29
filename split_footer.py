import os
import re

def update_footer(content):
    # Regex to find the Quick Links column and extract the start and end of it.
    # We will remove the Privacy and TOS links from it, change its col width to col-lg-2,
    # and insert a new col-lg-2 for Policies right after it.
    
    # 1. Remove the links from Quick Links
    content = re.sub(
        r'<li[^>]*><a href=\"privacy-policy\.html\"[^>]*><i[^>]*></i>Privacy Policy</a></li>\s*',
        '', content, flags=re.IGNORECASE
    )
    content = re.sub(
        r'<li[^>]*><a href=\"terms-of-service\.html\"[^>]*><i[^>]*></i>Terms of Service</a></li>\s*',
        '', content, flags=re.IGNORECASE
    )
    
    # 2. Change the Quick links column size and insert new column
    # The Quick Links column starts with: <div class="col-lg-3 col-md-3 col-sm-12" style="margin-bottom: 40px;">
    # followed by the H3 and UL. We want to find the end of this UL and append the new column.
    
    pattern = r'(<div class="col-lg-)3( col-md-)3( col-sm-12" style="margin-bottom: 40px;">\s*<h3[^>]*>Quick Links</h3>\s*<ul[^>]*>.*?</ul>\s*</div>)'
    
    new_policies_col = r'''
      <!-- Column: Policies -->
      <div class="col-lg-2 col-md-4 col-sm-12" style="margin-bottom: 40px;">
        <h3 style="color: #fff; margin-bottom: 25px; font-weight: 600; font-size: 18px; letter-spacing: 1px; text-transform: uppercase;">Policies</h3>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 16px;">
          <li style="margin-bottom: 15px;"><a href="privacy-policy.html" style="color: #bbb; text-decoration: none; transition: color 0.3s; display: inline-block;"><i class="fas fa-chevron-right" style="font-size: 12px; color: #1c3a5e; margin-right: 8px;"></i>Privacy Policy</a></li>
          <li style="margin-bottom: 15px;"><a href="terms-of-service.html" style="color: #bbb; text-decoration: none; transition: color 0.3s; display: inline-block;"><i class="fas fa-chevron-right" style="font-size: 12px; color: #1c3a5e; margin-right: 8px;"></i>Terms of Service</a></li>
        </ul>
      </div>'''
      
    # Replace col-lg-3 and col-md-3 with col-lg-2 and col-md-4 in Quick Links, then append new column
    replacement = r'\g<1>2\g<2>4\g<3>' + new_policies_col
    
    content = re.sub(pattern, replacement, content, flags=re.DOTALL | re.IGNORECASE)
    
    return content

files_changed = []

for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            try:
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                new_content = update_footer(content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    files_changed.append(filepath)
            except Exception as e:
                pass

print('Changed files:', files_changed)

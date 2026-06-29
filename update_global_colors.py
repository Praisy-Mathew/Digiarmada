import re
import os

orange_targets = ['#46989f', '#e03b1a', '#fd4811', '#f83600', '#c1936d']
purple_targets = ['#0c83e7', '#6cbdc0', '#36a493', '#b000ff']

def update_colors(file_path):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for t in orange_targets:
        content = re.sub(t, '#ff8c00', content, flags=re.IGNORECASE)
    
    for t in purple_targets:
        content = re.sub(t, '#8a2be2', content, flags=re.IGNORECASE)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

update_colors('css/styles.css')
update_colors('css/style2025.css')
print("CSS colors updated globally.")

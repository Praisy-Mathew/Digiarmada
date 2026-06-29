import re
html = open('index.html', 'r', encoding='utf-8').read()
match = re.search(r'<div class="copyrights"[^>]*>.*?</div>', html, re.DOTALL | re.IGNORECASE)
if match:
    print(match.group(0))

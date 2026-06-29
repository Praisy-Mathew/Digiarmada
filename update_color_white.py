import re

css = open('css/style2025.css', 'r', encoding='utf-8').read()
css = re.sub(
    r'(\.services-block h2 span\.hidetext\s*\{\s*background:\s*linear-gradient\([^\)]+,\s*)#ff8c00(\s*0%,\s*)#ff8c00(\s*100%\)\s*!important;)',
    r'\g<1>#ffffff\g<2>#ffffff\g<3>',
    css
)
open('css/style2025.css', 'w', encoding='utf-8').write(css)

html = open('index.html', 'r', encoding='utf-8').read()
html = html.replace('<h2><span class="hidetext" style="color: #ff8c00;">What We Do</span></h2>', '<h2><span class="hidetext">What We Do</span></h2>')
open('index.html', 'w', encoding='utf-8').write(html)

print('Updated heading color to white')

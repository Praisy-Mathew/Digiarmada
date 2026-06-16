const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace geo locations
  content = content.replace(/Kochi/gi, 'the UK');
  content = content.replace(/kochin/gi, 'the UK');
  content = content.replace(/chochin/gi, 'the UK');
  content = content.replace(/Cochin/gi, 'the UK');
  content = content.replace(/Ernakulam/gi, 'the UK');
  content = content.replace(/Kerala/gi, 'the UK');
  content = content.replace(/India/gi, 'the UK');
  
  // Fix grammar like "in the UK, the UK"
  content = content.replace(/the UK, the UK/gi, 'the UK');
  content = content.replace(/in the UK the UK/gi, 'in the UK');
  content = content.replace(/the UK India/gi, 'the UK');
  content = content.replace(/the UK the UK/gi, 'the UK');

  // Fix specific old meta tags that got left behind
  content = content.replace(/<meta name="city".*?>/gi, '');
  content = content.replace(/<meta name="state".*?>/gi, '');
  content = content.replace(/<meta name="country".*?>/gi, '');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Cleaned up locations in ' + file);
  }
}

const fs = require('fs');

let workHtml = fs.readFileSync('saihasoft_work.html', 'utf8');
const steps = JSON.parse(fs.readFileSync('steps.json', 'utf8'));

// Background colors and images for the 8 slides (borrowed from existing saihasoft classes or generic)
// We will assign a unique class or just generic styles for them
const genericBgClasses = ['lforlifebg', 'flywellbg', 'redteambg', 'edukgmbg', 'lforlifebg', 'flywellbg', 'redteambg', 'edukgmbg'];
const genericImages = [
  'images/case-studypic1.png',
  'images/case-studypic2.png',
  'images/case-studypic3.png',
  'images/case-studypic4.png',
  'images/bg-pic1.png',
  'images/bg-pic2.png',
  'images/bg-pic3.png',
  'images/bg-pic4.png'
];

// Generate Swiper Slides HTML
let swiperSlidesHtml = '';
steps.forEach((step, index) => {
  const slideNum = index + 1;
  const hash = 'step' + slideNum;
  const bgClass = genericBgClasses[index];
  const imgSrc = genericImages[index];

  swiperSlidesHtml += `
    <div data-hash="${hash}" class="swiper-slide">
        <div class="splashContent imm">
            <div class="rightSide">
                <div class="projectPic webDesign">
                    <img src="${imgSrc}" class="picMain forMobile ani_efx1" loading="lazy" alt="${step.title}">
                </div>
            </div>
            <div class="leftSide">
                <div class="slideNum">${slideNum} <span class="slidesCol">${steps.length}</span></div>
                <div class="category">Our Process</div>
                <div class="title">${step.title}</div>
                <div class="text">${step.desc}</div>
            </div>
        </div>
        <div class="gradBg ${bgClass} imm">
            <div class="bgElem"></div>
        </div>
    </div>
  `;
});

// Replace Swiper Wrapper content
const swiperRegex = /<div class="swiper-wrapper">([\s\S]*?)<\/div>\s*<!-- swiper-wrapper ends -->/g;
// Actually saihasoft_work.html might not have <!-- swiper-wrapper ends -->
// Let's do a basic string split replace or regex if it works
const swiperStartStr = '<div class="swiper-wrapper">';
const swiperEndStr = '<div class="swiper-pagination"></div>';
let startIdx = workHtml.indexOf(swiperStartStr);
let endIdx = workHtml.indexOf(swiperEndStr);
if (startIdx !== -1 && endIdx !== -1) {
  workHtml = workHtml.substring(0, startIdx + swiperStartStr.length) + '\n' + swiperSlidesHtml + '\n' + workHtml.substring(endIdx);
}

// Update Assets paths
workHtml = workHtml.replace(/href="css\//g, 'href="process_assets/css/');
workHtml = workHtml.replace(/src="js\//g, 'src="process_assets/js/');

// Update Phone numbers & WhatsApp
workHtml = workHtml.replace(/\+919778280848/g, '+447554464385');
workHtml = workHtml.replace(/text=Hi,[^"]*/g, 'text=Hi%20DigiArmada,%20I%20would%20like%20to%20discuss%20a%20project%20with%20your%20team.');

// Update Title and Meta
workHtml = workHtml.replace(/<title>.*?<\/title>/g, '<title>Our Process | DigiArmada</title>');
workHtml = workHtml.replace(/SaihaSoftware Technologies Pvt\. Ltd/gi, 'DigiArmada');
workHtml = workHtml.replace(/Saiha Soft/gi, 'DigiArmada');
workHtml = workHtml.replace(/saihasoft/gi, 'DigiArmada');

// Update Menu Links
const menuHtml = `
  <div class="menu">
      <div class="toggle-btn">
          <span class="one"></span>
          <span class="two"></span>
      </div>
      <div class="data">
          <ul class="html-remove">
              <li>Navigation</li>
              <li><a href="index.html">Home</a></li>
              <li><a href="about-us.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="process.html" class="active">Our Process</a></li>
              <li><a href="contact-us.html">Contact Us</a></li>
          </ul>
      </div>
  </div>
`;

// Replace menu
let menuStart = workHtml.indexOf('<div class="menu">');
let menuEnd = workHtml.indexOf('<div class="swiper-container" id="splashSlider">');
if (menuStart !== -1 && menuEnd !== -1) {
  // Try to find the exact end of menu div. It's safer to just replace everything between menuStart and menuEnd
  workHtml = workHtml.substring(0, menuStart) + menuHtml + '\n' + workHtml.substring(menuEnd);
}

// Remove empty space or specific saihasoft texts
workHtml = workHtml.replace(/Cochin India/gi, 'UK');
workHtml = workHtml.replace(/Kochi/gi, 'UK');
workHtml = workHtml.replace(/Kerala/gi, 'UK');

fs.writeFileSync('process.html', workHtml);
console.log('Successfully built process.html');

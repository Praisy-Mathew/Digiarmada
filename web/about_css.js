const fs = require('fs');

const cssAdd = `
/* About Us Page Additions */
.core-value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
  border-color: rgba(168, 85, 247, 0.5) !important;
}

@media (max-width: 991px) {
  .mission-vision-section > .container > .row > .col-md-6 > div {
    padding: 30px !important;
  }
  .why-choose-us-section > .container > .row > .col-lg-6:nth-child(2) > div {
    padding: 40px !important;
  }
}
`;

fs.appendFileSync('css/style2025.css', cssAdd);
console.log('Hover and responsive CSS added!');

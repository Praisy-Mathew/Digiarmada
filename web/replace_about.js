const fs = require('fs');

let html = fs.readFileSync('about-us.html', 'utf8');

const startTag = '<div class="about-header">';
const endTag = '<footer class="footer-block">';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = `
<!-- ABOUT US INTRO -->
<section class="about-intro-section" style="padding: 120px 0 80px; position: relative;">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <h1 style="font-size: 3.5rem; font-weight: 900; margin-bottom: 20px;">About Us</h1>
        <h3 style="color: #a855f7; font-size: 1.8rem; margin-bottom: 30px; font-weight: 600;">Empowering Businesses Through Technology & Innovation</h3>
        <p style="font-size: 1.1rem; color: #475569; line-height: 1.7; margin-bottom: 20px;">At DigiArmada, we believe that every business deserves access to powerful digital solutions that drive growth, efficiency, and long-term success. We are a forward-thinking digital solutions company specializing in website development, ecommerce solutions, digital marketing, custom software, CRM systems, ERP platforms, mobile applications, and AI-powered technologies.</p>
        <p style="font-size: 1.1rem; color: #475569; line-height: 1.7; margin-bottom: 20px;">Our mission is simple: to help businesses transform their ideas into impactful digital experiences. Whether you're a startup taking your first steps online or an established organization seeking digital transformation, we provide tailored solutions designed to meet your unique goals and challenges.</p>
        <p style="font-size: 1.1rem; color: #475569; line-height: 1.7; margin-bottom: 20px;">We combine creativity, technology, and strategic thinking to deliver solutions that not only look great but also generate measurable business results. From building high-performing websites to developing custom business software, we partner with our clients to create scalable digital ecosystems that support growth and innovation.</p>
        <p style="font-size: 1.1rem; color: #475569; line-height: 1.7; margin-bottom: 20px; font-weight: 600;">At DigiArmada, we don't just develop digital products—we build lasting partnerships and help businesses navigate the evolving digital landscape with confidence.</p>
      </div>
      <div class="col-lg-6 about-visual-col" style="position: relative; min-height: 550px; display: flex; align-items: center;">
          <div style="position: absolute; top: 0; right: 0; width: 70%; z-index: 1; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.3);">
            <img src="images/about .png" alt="DigiArmada agency capabilities" loading="lazy" style="width: 100%; height: auto; display: block;">
          </div>
          <div style="position: absolute; bottom: 0; left: 0; width: 65%; z-index: 2; border: 12px solid #fff; border-radius: 24px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.2);">
            <img src="images/about_visual.png" alt="DigiArmada growth strategies" loading="lazy" style="width: 100%; height: auto; display: block;">
          </div>
          <div style="position: absolute; bottom: -30px; right: 20px; width: 120px; height: 120px; background: radial-gradient(circle, #a855f7 10%, transparent 10.5%) 0 0 / 20px 20px; z-index: 0; opacity: 0.4;"></div>
      </div>
    </div>
  </div>
</section>

<!-- MISSION & VISION CARDS -->
<section class="mission-vision-section" style="padding: 80px 0; background: #f8fafc;">
  <div class="container">
    <div class="row">
      <!-- Mission -->
      <div class="col-md-6 mb-4">
        <div style="background: #fff; padding: 50px; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); height: 100%; border-top: 6px solid #a855f7;">
          <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 15px;">Our Mission</h2>
          <h4 style="color: #64748b; margin-bottom: 25px; font-weight: 600; line-height: 1.4;">Driving Business Growth Through Innovative Digital Solutions</h4>
          <p style="font-size: 1.1rem; line-height: 1.7; color: #475569;">Our mission is to empower businesses with affordable, high-quality digital solutions that enhance their online presence, streamline operations, and unlock new opportunities for growth. We are committed to delivering technology-driven services that create real value and help our clients succeed in a competitive digital world.</p>
        </div>
      </div>
      <!-- Vision -->
      <div class="col-md-6 mb-4">
        <div style="background: #fff; padding: 50px; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); height: 100%; border-top: 6px solid #3b82f6;">
          <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 15px;">Our Vision</h2>
          <h4 style="color: #64748b; margin-bottom: 25px; font-weight: 600; line-height: 1.4;">Shaping the Future of Digital Transformation</h4>
          <p style="font-size: 1.1rem; line-height: 1.7; color: #475569;">Our vision is to become a trusted global digital partner recognized for innovation, excellence, and customer success. We aspire to help businesses of all sizes embrace technology, accelerate growth, and achieve sustainable success through intelligent digital solutions.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CORE VALUES GRID -->
<section class="core-values-section" style="padding: 100px 0; background: #0f172a; color: #fff;">
  <div class="container">
    <div class="text-center" style="margin-bottom: 60px;">
      <h2 style="font-size: 3rem; font-weight: 900; color: #fff;">Our Core Values</h2>
      <p style="font-size: 1.2rem; color: #cbd5e1;">The principles that guide everything we do.</p>
    </div>
    <div class="row">
      <!-- Innovation -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="core-value-card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 20px; height: 100%; transition: transform 0.3s;">
          <i class="fas fa-lightbulb" style="font-size: 2.5rem; color: #facc15; margin-bottom: 20px;"></i>
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 15px;">Innovation</h3>
          <p style="color: #cbd5e1; line-height: 1.6;">We continuously explore new technologies, ideas, and strategies to deliver modern solutions that keep our clients ahead of the competition.</p>
        </div>
      </div>
      <!-- Excellence -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="core-value-card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 20px; height: 100%; transition: transform 0.3s;">
          <i class="fas fa-star" style="font-size: 2.5rem; color: #a855f7; margin-bottom: 20px;"></i>
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 15px;">Excellence</h3>
          <p style="color: #cbd5e1; line-height: 1.6;">We are committed to maintaining the highest standards in everything we do, from design and development to customer service and project delivery.</p>
        </div>
      </div>
      <!-- Integrity -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="core-value-card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 20px; height: 100%; transition: transform 0.3s;">
          <i class="fas fa-shield-alt" style="font-size: 2.5rem; color: #3b82f6; margin-bottom: 20px;"></i>
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 15px;">Integrity</h3>
          <p style="color: #cbd5e1; line-height: 1.6;">We believe in honesty, transparency, and ethical business practices, building trust through every interaction and partnership.</p>
        </div>
      </div>
      <!-- Customer Success -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="core-value-card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 20px; height: 100%; transition: transform 0.3s;">
          <i class="fas fa-chart-line" style="font-size: 2.5rem; color: #10b981; margin-bottom: 20px;"></i>
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 15px;">Customer Success</h3>
          <p style="color: #cbd5e1; line-height: 1.6;">Our clients' success is our success. We focus on understanding their goals and delivering solutions that create measurable business impact.</p>
        </div>
      </div>
      <!-- Collaboration -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="core-value-card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 20px; height: 100%; transition: transform 0.3s;">
          <i class="fas fa-users" style="font-size: 2.5rem; color: #f43f5e; margin-bottom: 20px;"></i>
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 15px;">Collaboration</h3>
          <p style="color: #cbd5e1; line-height: 1.6;">Great solutions are built through teamwork. We work closely with our clients, fostering strong partnerships and open communication throughout every project.</p>
        </div>
      </div>
      <!-- Growth Mindset -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="core-value-card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 20px; height: 100%; transition: transform 0.3s;">
          <i class="fas fa-seedling" style="font-size: 2.5rem; color: #8b5cf6; margin-bottom: 20px;"></i>
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 15px;">Growth Mindset</h3>
          <p style="color: #cbd5e1; line-height: 1.6;">We embrace continuous learning, improvement, and innovation to ensure our clients and our company continue to grow together.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHY CHOOSE US -->
<section class="why-choose-us-section" style="padding: 100px 0; background: #fff;">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <h2 style="font-size: 3rem; font-weight: 900; margin-bottom: 30px; line-height: 1.2;">Why Choose <br><span style="color: #a855f7;">DigiArmada?</span></h2>
        <ul style="list-style: none; padding: 0; margin-bottom: 0;">
          <li style="font-size: 1.2rem; margin-bottom: 20px; display: flex; align-items: flex-start; color: #334155; font-weight: 500;"><i class="fas fa-check-circle" style="color: #10b981; margin-right: 15px; font-size: 1.5rem; margin-top: 2px;"></i> Customized Solutions Tailored to Your Business</li>
          <li style="font-size: 1.2rem; margin-bottom: 20px; display: flex; align-items: flex-start; color: #334155; font-weight: 500;"><i class="fas fa-check-circle" style="color: #10b981; margin-right: 15px; font-size: 1.5rem; margin-top: 2px;"></i> Affordable Pricing Without Compromising Quality</li>
          <li style="font-size: 1.2rem; margin-bottom: 20px; display: flex; align-items: flex-start; color: #334155; font-weight: 500;"><i class="fas fa-check-circle" style="color: #10b981; margin-right: 15px; font-size: 1.5rem; margin-top: 2px;"></i> Expertise Across Multiple Digital Services</li>
          <li style="font-size: 1.2rem; margin-bottom: 20px; display: flex; align-items: flex-start; color: #334155; font-weight: 500;"><i class="fas fa-check-circle" style="color: #10b981; margin-right: 15px; font-size: 1.5rem; margin-top: 2px;"></i> End-to-End Project Support</li>
          <li style="font-size: 1.2rem; margin-bottom: 20px; display: flex; align-items: flex-start; color: #334155; font-weight: 500;"><i class="fas fa-check-circle" style="color: #10b981; margin-right: 15px; font-size: 1.5rem; margin-top: 2px;"></i> Future-Ready Technologies</li>
          <li style="font-size: 1.2rem; margin-bottom: 20px; display: flex; align-items: flex-start; color: #334155; font-weight: 500;"><i class="fas fa-check-circle" style="color: #10b981; margin-right: 15px; font-size: 1.5rem; margin-top: 2px;"></i> Results-Driven Approach</li>
          <li style="font-size: 1.2rem; margin-bottom: 0px; display: flex; align-items: flex-start; color: #334155; font-weight: 500;"><i class="fas fa-check-circle" style="color: #10b981; margin-right: 15px; font-size: 1.5rem; margin-top: 2px;"></i> Long-Term Business Partnerships</li>
        </ul>
      </div>
      <div class="col-lg-6">
        <div style="background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%); padding: 60px; border-radius: 30px; color: #fff; box-shadow: 0 20px 40px rgba(168,85,247,0.3); text-align: center;">
          <h3 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 20px; line-height: 1.3;">Building Digital Experiences. Driving Business Growth.</h3>
          <p style="font-size: 1.1rem; margin-bottom: 40px; color: rgba(255,255,255,0.9); line-height: 1.7;">At DigiArmada, we're passionate about helping businesses leverage technology to achieve their goals. From websites and ecommerce platforms to AI-powered solutions and enterprise software, we create digital experiences that inspire, engage, and deliver results.</p>
          <a href="contact-us.html" style="display: inline-block; background: #fff; color: #a855f7; font-weight: 800; padding: 18px 40px; border-radius: 50px; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; box-shadow: 0 10px 20px rgba(0,0,0,0.1); transition: transform 0.3s;">Get Free Consultation</a>
        </div>
      </div>
    </div>
  </div>
</section>

		`;

  const finalHtml = html.substring(0, startIndex) + newContent + '\n\t\t' + html.substring(endIndex);
  fs.writeFileSync('about-us.html', finalHtml);
  console.log('Successfully updated about-us.html with the new content!');
} else {
  console.log('Error finding the target start or end tags.');
}

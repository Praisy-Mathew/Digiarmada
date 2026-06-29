import os

html = open('privacy-policy.html', 'r', encoding='utf-8').read()
lines = html.split('\n')

header_end = 0
footer_start = 0

for i, line in enumerate(lines):
    if '</header>' in line:
        header_end = i
    if '<footer' in line:
        footer_start = i

header_lines = lines[:header_end + 1]
footer_lines = lines[footer_start:]

# Change the title
for i in range(len(header_lines)):
    if '<title>' in header_lines[i]:
        header_lines[i] = '<title>Terms of Service - DigiArmada</title>'

tos_content = '''
<style>
  .tos-content p, .tos-content li { font-size: 18px; line-height: 1.8; color: #555; margin-bottom: 15px; }
  .tos-content h1 { font-size: 42px; margin-bottom: 25px; color: #1c3a5e; font-weight: 700; }
  .tos-content h2 { font-size: 32px; margin-top: 50px; margin-bottom: 25px; color: #1c3a5e; }
  .tos-content h3 { font-size: 24px; margin-top: 30px; margin-bottom: 15px; color: #333; }
</style>
<div class="container about-intro-section tos-content" style="padding: 100px 15px; margin-top: 50px;">
  <h1>Terms of Service</h1>
  <p><strong>Last Updated: 26 June 2026</strong></p>

  <h2>1. Introduction</h2>
  <p>Welcome to DigiArmada Ltd ("DigiArmada", "we", "our", or "us"). These Terms of Service ("Terms") govern your access to and use of our website, products, and professional services.</p>
  <p>By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be legally bound by these Terms. If you do not agree with any part of these Terms, you should not use our website or services.</p>
  <p>DigiArmada Ltd is a company registered in England and Wales under Company Registration Number <strong>17235230</strong>.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>2. Our Services</h2>
  <p>DigiArmada Ltd provides professional business and technology solutions, including but not limited to:</p>
  <ul>
    <li>Website Design & Development</li>
    <li>E-commerce Development</li>
    <li>Custom Software Development</li>
    <li>Digital Marketing</li>
    <li>Search Engine Optimization (SEO)</li>
    <li>Branding & Creative Design</li>
    <li>Mobile Application Development</li>
    <li>Enterprise Engineering Solutions</li>
    <li>IT Infrastructure & Networking</li>
    <li>CCTV & Security Systems</li>
    <li>Cloud & Business Technology Solutions</li>
    <li>Technical Consulting</li>
    <li>Building & Infrastructure Solutions</li>
  </ul>
  <p>The scope of services provided shall be defined in individual quotations, proposals, contracts, or Statements of Work (SOW).</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>3. Client Responsibilities</h2>
  <p>Clients agree to:</p>
  <ul>
    <li>Provide accurate and complete information required for project delivery.</li>
    <li>Supply necessary content, branding assets, credentials, and approvals within agreed timelines.</li>
    <li>Review project deliverables promptly and provide feedback.</li>
    <li>Ensure that all materials supplied to DigiArmada do not infringe any third-party intellectual property rights.</li>
    <li>Maintain the confidentiality of login credentials issued during the project.</li>
  </ul>
  <p>Delays in providing required information may affect project schedules and delivery dates.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>4. Quotations, Pricing & Payments</h2>
  <p>Unless otherwise agreed in writing:</p>
  <ul>
    <li>All quotations remain valid for 30 days from the date of issue.</li>
    <li>Prices are quoted in the applicable currency stated within the quotation.</li>
    <li>Projects may require an advance deposit before work commences.</li>
    <li>Remaining balances shall be payable according to the agreed payment schedule.</li>
    <li>Late payments may result in suspension of services until outstanding invoices are settled.</li>
  </ul>
  <p>All fees are exclusive of applicable taxes unless otherwise stated.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>5. Project Delivery</h2>
  <p>Estimated timelines are provided in good faith but are not guaranteed.</p>
  <p>Project schedules may be affected by:</p>
  <ul>
    <li>Client-requested revisions</li>
    <li>Delayed approvals</li>
    <li>Late content submission</li>
    <li>Third-party service interruptions</li>
    <li>Circumstances beyond our reasonable control</li>
  </ul>
  <p>DigiArmada Ltd will make every reasonable effort to complete projects within agreed timelines.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>6. Revisions & Change Requests</h2>
  <p>Unless otherwise specified in your proposal or agreement:</p>
  <ul>
    <li>Reasonable revisions are included within the agreed project scope.</li>
    <li>Additional revisions or requests outside the agreed scope may incur additional charges.</li>
    <li>Significant changes to project requirements may require a revised quotation and delivery schedule.</li>
  </ul>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>7. Intellectual Property</h2>
  <p>Upon full payment of all outstanding fees:</p>
  <ul>
    <li>Clients receive ownership of the final approved deliverables unless otherwise agreed in writing.</li>
    <li>DigiArmada Ltd retains ownership of proprietary frameworks, internal tools, reusable code libraries, templates, methodologies, and pre-existing intellectual property.</li>
    <li>Third-party software, plugins, fonts, licences, and assets remain subject to their respective licence agreements.</li>
  </ul>
  <p>We reserve the right to display completed projects within our portfolio unless otherwise agreed under a written confidentiality agreement.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>8. Confidentiality</h2>
  <p>Both DigiArmada Ltd and the client agree to keep confidential any proprietary, technical, financial, or commercial information exchanged during the course of a project.</p>
  <p>This obligation survives the completion or termination of the agreement.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>9. Third-Party Services</h2>
  <p>Projects may involve third-party providers including:</p>
  <ul>
    <li>Domain registrars</li>
    <li>Hosting providers</li>
    <li>Cloud platforms</li>
    <li>Payment gateways</li>
    <li>Analytics platforms</li>
    <li>Marketing platforms</li>
    <li>Software vendors</li>
  </ul>
  <p>DigiArmada Ltd is not responsible for service interruptions, pricing changes, outages, or policy changes made by third-party providers.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>10. Acceptable Use</h2>
  <p>Clients agree not to use our services for activities that are unlawful or prohibited, including but not limited to:</p>
  <ul>
    <li>Fraudulent activities</li>
    <li>Distribution of malware</li>
    <li>Spam or unsolicited communications</li>
    <li>Copyright infringement</li>
    <li>Defamation</li>
    <li>Illegal content</li>
    <li>Unauthorized access to systems or networks</li>
  </ul>
  <p>We reserve the right to suspend or terminate services where unlawful or abusive activity is identified.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>11. Limitation of Liability</h2>
  <p>To the fullest extent permitted by law, DigiArmada Ltd shall not be liable for:</p>
  <ul>
    <li>Indirect or consequential losses</li>
    <li>Loss of profits</li>
    <li>Loss of business opportunities</li>
    <li>Loss of data</li>
    <li>Business interruption</li>
    <li>Third-party service failures</li>
  </ul>
  <p>Our total liability arising from any agreement shall not exceed the total fees paid by the client for the specific services giving rise to the claim.</p>
  <p>Nothing in these Terms limits liability where such limitation is prohibited under applicable law.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>12. Warranties</h2>
  <p>We warrant that services will be performed with reasonable skill and care.</p>
  <p>Except where expressly stated, all services are provided on an "as available" and "as is" basis.</p>
  <p>We do not guarantee:</p>
  <ul>
    <li>Specific search engine rankings</li>
    <li>Advertising performance</li>
    <li>Sales or revenue increases</li>
    <li>Continuous availability of third-party platforms</li>
    <li>Future compatibility with external software or services</li>
  </ul>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>13. Suspension & Termination</h2>
  <p>Either party may terminate a project in accordance with the agreed contract.</p>
  <p>DigiArmada Ltd reserves the right to suspend or terminate services where:</p>
  <ul>
    <li>Payment obligations are not fulfilled.</li>
    <li>Clients breach these Terms.</li>
    <li>Fraudulent or unlawful activity is detected.</li>
    <li>Continued service would violate applicable law.</li>
  </ul>
  <p>Outstanding fees remain payable upon termination.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>14. Data Protection</h2>
  <p>We process personal information in accordance with our Privacy Policy and applicable UK data protection legislation, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>15. Force Majeure</h2>
  <p>Neither party shall be liable for delays or failure to perform obligations resulting from events beyond reasonable control, including natural disasters, cyber incidents, government actions, labour disputes, telecommunications failures, pandemics, or other unforeseen events.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>16. Governing Law</h2>
  <p>These Terms shall be governed by and interpreted in accordance with the laws of England and Wales.</p>
  <p>Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>17. Changes to These Terms</h2>
  <p>We may update these Terms of Service from time to time.</p>
  <p>Any revisions will become effective upon publication on this website. Continued use of our website or services constitutes acceptance of the updated Terms.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2>18. Contact Us</h2>
  <p>For questions regarding these Terms of Service, please contact us:</p>
  <p><strong>DigiArmada Ltd</strong></p>
  <p><strong>Registered Office</strong><br>
  4 Bedford Park<br>
  Croydon<br>
  Surrey CR0 2AP<br>
  United Kingdom</p>
  <p><strong>Email:</strong> <a href="mailto:info@digiarmada.co.uk" style="color: #1c3a5e;">info@digiarmada.co.uk</a></p>
  <p><strong>Telephone:</strong> +44 7554 464385</p>
  <br>
  <p><strong>Company Registration Number:</strong> 17235230</p>
</div>
'''

new_html_content = '\n'.join(header_lines) + '\n' + tos_content + '\n' + '\n'.join(footer_lines)

with open('terms-of-service.html', 'w', encoding='utf-8') as file:
    file.write(new_html_content)

print('Created terms-of-service.html')

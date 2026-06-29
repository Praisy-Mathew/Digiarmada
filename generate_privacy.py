import os

html = open('about-us.html', 'r', encoding='utf-8').read()
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
        header_lines[i] = '<title>Privacy Policy - DigiArmada</title>'

privacy_content = '''
<div class="container" style="padding: 100px 15px; margin-top: 50px;">
  <h1 style="color: #1c3a5e; font-weight: 700; margin-bottom: 20px;">Privacy Policy</h1>
  <p><strong>Last Updated: 26 June 2026</strong></p>

  <h2 style="color: #1c3a5e; margin-top: 40px; margin-bottom: 20px;">Introduction</h2>
  <p>DigiArmada Ltd ("DigiArmada", "we", "our", or "us") is committed to protecting your privacy and ensuring that your personal data is handled securely, responsibly, and in accordance with applicable data protection laws.</p>
  <p>This Privacy Policy explains how we collect, use, store, disclose, and protect your personal information when you visit our website, engage our services, or communicate with us.</p>
  <p>For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, DigiArmada Ltd is the <strong>Data Controller</strong>.</p>
  <p><strong>Company Registration Number:</strong> 17235230</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2 style="color: #1c3a5e; margin-bottom: 20px;">1. Information We Collect</h2>
  <p>Depending on how you interact with us, we may collect the following categories of information:</p>
  
  <h3 style="color: #333; margin-top: 20px;">Identity Information</h3>
  <ul>
    <li>Full name</li>
    <li>Job title</li>
    <li>Company or business name</li>
  </ul>

  <h3 style="color: #333; margin-top: 20px;">Contact Information</h3>
  <ul>
    <li>Email address</li>
    <li>Telephone number</li>
    <li>Billing address</li>
    <li>Postal address (where applicable)</li>
  </ul>

  <h3 style="color: #333; margin-top: 20px;">Technical Information</h3>
  <ul>
    <li>IP address</li>
    <li>Browser type and version</li>
    <li>Operating system</li>
    <li>Device information</li>
    <li>Time zone settings</li>
    <li>Website usage analytics</li>
    <li>Cookies and similar technologies</li>
  </ul>

  <h3 style="color: #333; margin-top: 20px;">Project Information</h3>
  <p>Where required to deliver our services, we may process:</p>
  <ul>
    <li>Website content</li>
    <li>Business information</li>
    <li>Source code</li>
    <li>Hosting credentials</li>
    <li>CMS login details</li>
    <li>Technical documentation</li>
    <li>Design assets</li>
    <li>Databases</li>
    <li>Other information supplied by you during the course of a project</li>
  </ul>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2 style="color: #1c3a5e; margin-bottom: 20px;">2. How We Use Your Information</h2>
  <p>We process personal information only where there is a lawful basis for doing so.</p>
  <p>Your information may be used to:</p>
  <ul>
    <li>Deliver our web development, digital marketing, infrastructure, and IT services</li>
    <li>Manage client projects and communications</li>
    <li>Respond to enquiries and provide customer support</li>
    <li>Process invoices and payments</li>
    <li>Maintain business records</li>
    <li>Improve our website and services</li>
    <li>Comply with legal, regulatory, and contractual obligations</li>
    <li>Protect our business against fraud and security risks</li>
  </ul>
  <p>We do not sell or rent your personal information to third parties.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2 style="color: #1c3a5e; margin-bottom: 20px;">3. International Data Transfers</h2>
  <p>DigiArmada Ltd operates a centralized project delivery model supported by qualified technical teams and trusted service providers located in multiple jurisdictions.</p>
  <p>As part of delivering our services, certain project data may be securely transferred outside the United Kingdom where necessary.</p>
  <p>Whenever international transfers occur, we ensure appropriate safeguards are implemented, including:</p>
  <ul>
    <li>International Data Transfer Agreements (IDTAs)</li>
    <li>Standard Contractual Clauses (SCCs) approved by the UK Information Commissioner's Office (ICO)</li>
    <li>Secure contractual agreements with authorised vendors and technical personnel</li>
    <li>Compliance with applicable local data protection legislation where processing occurs</li>
  </ul>
  <p>These safeguards ensure that your personal information receives a level of protection equivalent to that required under UK data protection law.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2 style="color: #1c3a5e; margin-bottom: 20px;">4. Information Security</h2>
  <p>Protecting client information is fundamental to our operations.</p>
  <p>We implement appropriate technical and organisational security measures including:</p>
  
  <h3 style="color: #333; margin-top: 20px;">Encryption</h3>
  <p>All data transmitted between users and our systems is protected using industry-standard SSL/TLS encryption.</p>
  <p>Sensitive project information is protected using secure encryption standards, including AES-256 where applicable.</p>
  
  <h3 style="color: #333; margin-top: 20px;">Access Controls</h3>
  <p>Access to project environments, databases, repositories, and client information is restricted through Role-Based Access Control (RBAC).</p>
  <p>Only authorised personnel with a legitimate business need are granted access.</p>
  
  <h3 style="color: #333; margin-top: 20px;">Confidentiality</h3>
  <p>Employees, contractors, consultants, and third-party service providers working with DigiArmada Ltd are subject to legally binding confidentiality obligations, including Non-Disclosure Agreements (NDAs).</p>
  
  <h3 style="color: #333; margin-top: 20px;">Infrastructure Security</h3>
  <p>We continuously monitor and maintain appropriate technical safeguards to protect systems against unauthorised access, loss, misuse, alteration, or disclosure.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2 style="color: #1c3a5e; margin-bottom: 20px;">5. Data Retention</h2>
  <p>We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, taxation, and reporting requirements.</p>
  <p>Upon completion of a project, project-related information will be retained only where required for contractual obligations, warranty, ongoing support, or legal compliance.</p>
  <p>Where data is no longer required, it will be securely deleted or anonymised.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2 style="color: #1c3a5e; margin-bottom: 20px;">6. Your Rights</h2>
  <p>Under the UK GDPR, you have the right to:</p>
  <ul>
    <li>Request access to the personal information we hold about you.</li>
    <li>Request correction of inaccurate or incomplete information.</li>
    <li>Request deletion of your personal information where applicable.</li>
    <li>Restrict or object to certain types of processing.</li>
    <li>Request transfer of your personal data where legally applicable.</li>
    <li>Withdraw consent where processing is based on consent.</li>
    <li>Lodge a complaint with the UK Information Commissioner's Office (ICO).</li>
  </ul>
  <p>To exercise any of these rights, please contact us using the details below.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2 style="color: #1c3a5e; margin-bottom: 20px;">7. Cookies</h2>
  <p>Our website may use cookies and similar technologies to:</p>
  <ul>
    <li>Improve website functionality</li>
    <li>Analyse website traffic</li>
    <li>Enhance user experience</li>
    <li>Remember user preferences</li>
  </ul>
  <p>You may control or disable cookies through your browser settings.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2 style="color: #1c3a5e; margin-bottom: 20px;">8. Third-Party Services</h2>
  <p>Our website may integrate with trusted third-party providers including payment processors, analytics platforms, hosting providers, communication services, and marketing tools.</p>
  <p>These providers process information in accordance with their own privacy policies and applicable data protection laws.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2 style="color: #1c3a5e; margin-bottom: 20px;">9. Changes to This Privacy Policy</h2>
  <p>We may update this Privacy Policy from time to time to reflect changes in legislation, technology, or our business operations.</p>
  <p>Any updates will be published on this page together with the revised "Last Updated" date.</p>
  <hr style="margin: 40px 0; border-top: 1px solid #ddd;">

  <h2 style="color: #1c3a5e; margin-bottom: 20px;">10. Contact Information</h2>
  <p>If you have any questions regarding this Privacy Policy or wish to exercise your data protection rights, please contact us.</p>
  <p><strong>DigiArmada Ltd</strong></p>
  <p><strong>Registered Office</strong><br>
  4 Bedford Park<br>
  Croydon<br>
  Surrey CR0 2AP<br>
  United Kingdom</p>
  <p><strong>Email:</strong> <a href="mailto:info@digiarmada.co.uk" style="color: #1c3a5e;">info@digiarmada.co.uk</a></p>
  <p><strong>Telephone:</strong> +44 7554 464385</p>
  <br>
  <p><strong>Data Protection & Compliance</strong></p>
  <p><strong>Email:</strong> <a href="mailto:info@digiarmada.co.uk" style="color: #1c3a5e;">info@digiarmada.co.uk</a><br>
  <strong>Telephone:</strong> +44 7554 464385</p>
</div>
'''

new_html_content = '\n'.join(header_lines) + '\n' + privacy_content + '\n' + '\n'.join(footer_lines)

with open('privacy-policy.html', 'w', encoding='utf-8') as file:
    file.write(new_html_content)

print('Created privacy-policy.html')

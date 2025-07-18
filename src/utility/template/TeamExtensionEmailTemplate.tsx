export function generateTeamEstimateEmailTemplate(result: any) {
  const technologiesSummary = Object.entries(result?.step1Technology || {})
    .map(([techKey, levels]: any) => {
      const levelSummaries = levels
        .map((levelObj: any) => {
          const level = Object.keys(levelObj)[0];
          const roles = (Array.isArray(levelObj[level]) ? levelObj[level] : [])
            .flatMap((role: any) => (Array.isArray(role.label) ? role.label : [role]))
            .filter((r: any) => r.count > 0)
            .map((r: any) => `${r.label} (${r.count})`)
            .join(", ");
          return `${level}: ${roles}`;
        })
        .join(" | ");
      return `<li><strong>${techKey.toUpperCase()}:</strong> ${levelSummaries}</li>`;
    })
    .join("");

  const specialistsSummary = (result?.step2Specialist || []).map((spec: any) => `${spec.label} (${spec.count})`).join(", ") || "None";

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Thoughtwin - Estimate Summary</title>
    <style>
      @font-face {
        font-family: 'SF Pro Display';
        src: url("https://yourdomain.com/fonts/SFProDisplay-Regular.ttf") format("truetype");
      }
      body {
        background: #000;
        font-family: 'SF Pro Display', sans-serif;
      }
      .email-main {
        width: 600px;
        margin: 20px auto;
        background: #fff;
      }
      .logo-content {
        background: url("cid:bgImg");
        background-size: cover;
        background-repeat: no-repeat;
        text-align: center;
        height: 100px;
      }
      .logo-content img {
        padding: 34px 0px 0px;
      }
      .text-center {
        text-align: center;
        padding: 20px;
      }
      .email-footer {
        background: #4A4A4A;
        text-align: center;
        padding: 10px;
      }
      .email-footer p {
        color: #fff;
      }
      .email-footer ul {
        padding: 0;
      }
      .email-footer ul li {
        display: inline-block;
        margin: 0 10px;
        list-style: none;
      }
    </style>
  </head>
  <body>
    <section class="email-main">
      <div class="logo-content">
        <img src="cid:logoImg" alt="Logo" />
      </div>
      <img src="cid:emailIcon" alt="Email Header" style="width: 100%; height: 100px;" />
      <div class="text-center">
        <h1>Team Extension Estimate Received</h1>
        <hr style="width: 450px; margin: auto;" />
      </div>
      <div style="padding: 0 78px 10px;">
        <h4>Hello ${"HR Team"},</h4>
        <p>Thank you for contacting <strong>Thoughtwin</strong> for your team extension estimate.</p>
        <p>Here’s what we’ve received:</p>
        <ul>
          ${technologiesSummary || "<li><strong>Technologies:</strong> None provided</li>"}
          <li><strong>Specialists:</strong> ${specialistsSummary}</li>
          <li><strong>Need Extension:</strong> ${result?.needExtension || "Not specified"}</li>
          <li><strong>Email:</strong> ${result?.email || "Not provided"}</li>
        </ul>
        <p>We’ve successfully received your request and our team will reach out to you shortly to discuss your project in more detail.</p>
        <p>If you have any urgent questions, feel free to contact our representative at <strong>6265525569</strong>. We're here to help!</p>
        <p>Thanks again for choosing Thoughtwin.</p>
        <p>Best regards,<br /><strong>The Thoughtwin Team</strong><br />www.thoughtwin.com</p>
      </div>
      <div class="email-footer">
        <ul>
          <li><a href="https://www.twitter.com/thoughtwin/"><img src="cid:twitter" alt="Twitter" /></a></li>
          <li><a href="https://www.facebook.com/thoughtwin/"><img src="cid:facebook" alt="Facebook" /></a></li>
          <li><a href="https://in.linkedin.com/company/thoughtwin"><img src="cid:linkedin" alt="LinkedIn" /></a></li>
          <li><a href="https://www.instagram.com/thoughtwin_solutions/"><img src="cid:instagram" alt="Instagram" /></a></li>
        </ul>
        <p>© Thoughtwin ${new Date().getFullYear()} All rights reserved</p>
      </div>
    </section>
  </body>
  </html>`;
}

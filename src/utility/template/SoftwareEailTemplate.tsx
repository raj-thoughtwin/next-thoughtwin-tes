import { UserDataEmailInterface } from "@/types/templateTypes";

export function generateSoftwareEmailTemplate(user: any) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>Thoughtwin - Estimate Summary</title>
    <style>
      @font-face {
        font-family: 'SF Pro Display';
        src: url("https://yourdomain.com/fonts/SFProDisplay-Regular.ttf") format("truetype");
      }
      body {
        background: #000;
        font-family: 'SF Pro Display', sans-serif;
        margin: 0;
        padding: 0;
      }
      .email-main {
        width: 600px;
        margin: 20px auto;
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
      }
      .logo-content {
        background: url("cid:bgImg") no-repeat center;
        background-size: cover;
        text-align: center;
        height: 100px;
      }
      .logo-content img {
        padding: 34px 0 0;
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
        font-size: 12px;
      }
      .email-footer ul {
        padding: 0;
        margin: 0;
      }
      .email-footer ul li {
        display: inline-block;
        margin: 0 8px;
        list-style: none;
      }
      .content {
        padding: 0 40px 20px;
        color: #333;
      }
      .content h2 {
        font-size: 20px;
        margin-top: 0;
      }
      .content p {
        font-size: 16px;
      }
      .result-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .result-list li {
        margin: 10px 0;
        font-size: 16px;
      }
      .result-list strong {
        display: block;
        margin-bottom: 4px;
      }
    </style>
  </head>
  <body>
    <section class="email-main">
      <div class="logo-content">
        <img src="cid:logoImg" alt="Thoughtwin Logo" />
      </div>
      <img src="cid:emailIcon" alt="Estimate Banner" style="width: 100%; height: 100px;" />
      <div class="text-center">
        <h1>Estimate Request Received</h1>
        <hr style="width: 450px; margin: auto;" />
      </div>
      <div class="content">
        <h2>Hello ${"HR Team"},</h2>
        <p>Thank you for contacting <strong>Thoughtwin</strong> for your software project estimation. Below is the summary of your request:</p>
        <ul class="result-list">
          <li><strong>1. What would you like to do? : </strong> ${user?.whatToDo || "N/A"}</li>
          <li><strong>2. What do you already have? : </strong> ${user?.alreadyHave || "N/A"}</li>
          <li><strong>3. Platform type : </strong> ${user?.platformType || "N/A"}</li>
          <li><strong>4. Industry : </strong> ${user?.industry || "N/A"}</li>
          ${user?.solutionTypes?.length ? `<li><strong>5. Solution types : </strong> ${user.solutionTypes.join(", ")}</li>` : ""}
          <li><strong>6. When do you want to start? : </strong> ${user?.projectDelivery || "N/A"}</li>
        </ul>
        <p>We will review your request and contact you shortly at <strong>${user?.email}</strong> with the detailed estimate and next steps.</p>
        <p>To save time, you can <a href="https://yourbookinglink.com">book a call with us now</a>.</p>
        <p>Best regards,<br/><strong>The Thoughtwin Team</strong><br/>www.thoughtwin.com</p>
      </div>
      <div class="email-footer">
        <ul>
          <li><a href="https://www.twitter.com/thoughtwin/"><img src="cid:twitter" alt="Twitter" /></a></li>
          <li><a href="https://www.facebook.com/thoughtwin/"><img src="cid:facebook" alt="Facebook" /></a></li>
          <li><a href="https://in.linkedin.com/company/thoughtwin"><img src="cid:linkedin" alt="LinkedIn" /></a></li>
          <li><a href="https://www.instagram.com/thoughtwin_solutions/"><img src="cid:instagram" alt="Instagram" /></a></li>
        </ul>
        <p>© Thoughtwin ${new Date().getFullYear()} All rights reserved.</p>
      </div>
    </section>
  </body>
  </html>`;
}

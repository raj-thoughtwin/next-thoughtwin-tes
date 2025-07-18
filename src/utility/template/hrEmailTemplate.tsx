import { UserDataEmailInterface } from "@/types/templateTypes";

export function generateHrEmailTemplate(user: UserDataEmailInterface) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thoughtwin</title>
      <style>
        @font-face {
          font-family: 'SF Pro Display';
          src: url("https://yourdomain.com/fonts/SFProDisplay-Regular.ttf") format("truetype");
        }
        body {
          background: #000;
          font-family: 'SF Pro Display';
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
        .text-left {
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
        <div class="text-left">
          <p><strong>Dear HR Team,</strong></p>
          <p>We have received a new job application via the company website. Below are the applicant's details:</p>
          <p><strong>Name:</strong> ${user.name}
          <br /><strong>Email:</strong> ${user.email}
          <br /><strong>Phone:</strong> ${user.phoneNumber}
          <br /><strong>Location:</strong> ${user.currentLocation}
          <br /><strong>Experience:</strong> ${user.relevantExperience}
          <br /><strong>Key Skills:</strong> ${user.keySkills}
          <br /><strong>Notice Period:</strong> ${user.noticePeriod}
          <br /><strong>Reason for Change:</strong> ${user.reasonForJobChange}</p>
          <p>Please review the applicant's details and proceed with the next steps accordingly.</p>
          <p>Best regards,<br /><strong>The Thoughtwin Team</strong>  
          </p>
        </div>
        <div class="email-footer">
          <ul>
            <li><a href="https://www.twitter.com/thoughtwin/"><img src="cid:twitter" alt="Twitter" /></a></li>
            <li><a href="https://www.facebook.com/thoughtwin/"><img src="cid:facebook" alt="Facebook" /></a></li>
            <li><a href="https://in.linkedin.com/company/thoughtwin"><img src="cid:linkedin" alt="LinkedIn" /></a></li>
            <li><a href="https://www.instagram.com/thoughtwin_solutions/"><img src="cid:instagram"  alt="Instagram" /></a></li>
          </ul>
          <p>© Thoughtwin 2022 All rights reserved</p>
        </div>
      </section>
    </body>
    </html>`;
}

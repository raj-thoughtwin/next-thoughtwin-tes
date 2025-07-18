import { UserDataEmailInterface } from "@/types/templateTypes";

export function generateUserEmailTemplate(user: any) {
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
        <h1>Your E-mail is Being Reviewed</h1>
        <hr style="width: 450px; margin: auto;" />
      </div>
      <div style="padding: 0 78px 10px;">
        <h4>Hello  ${user.name || user.fullName || user.fname + " " + user.lname || "User"},</h4>
        ${user.name ? `<p>Thank you for applying for a position of ${user.position || "Software Developer"} at <strong>Thoughtwin</strong>.</p>` : user.fullName ? `<p>Thank you for contacting <strong>Thoughtwin</strong>!</p>` : ` <p>Thank you for contacting <strong>Thoughtwin</strong> for your project estimation.</p>`}
        ${
          user.name
            ? `<p>We’ve received your application and our team is currently reviewing your details. We will get in touch with you as soon as possible regarding the next steps.</p>`
            : user.fullName
              ? `<p>We’ve received your inquiry and our team will get back to you as soon as possible. We truly appreciate your interest and will ensure your message is given prompt attention.</p>`
              : `<p>We’ve successfully received your inquiry and our team will reach out to you shortly
        to discuss your project in more detail.</p>`
        }
        ${
          user.name
            ? `<p>If you have any urgent questions, please feel free to contact our representative at <strong>6265525569</strong>. We’re happy to assist you.</p>`
            : user.fullName
              ? `<p>If you have any urgent questions, feel free to contact our representative at <strong>6265525569</strong>. We’re happy to assist you.</p>`
              : `<p>If you have any urgent questions, feel free to contact our representative at 
        <strong>6265525569</strong>. We're here to help!</p>`
        }
        ${user.name ? `<p>We appreciate your interest in joining our team!</p>` : user.fullName ? `<p>Thank you once again for reaching out.</p>` : `<p>Thanks again for choosing Thoughtwin.</p>`}
        <p>Best regards,<br /><strong>The Thoughtwin Team</strong>
        <br />www.thoughtwin.com
        </p>
      </div>
      <div class="email-footer">
        <ul>
          <li><a href="https://www.twitter.com/thoughtwin/"><img src="cid:twitter" alt="Twitter" /></a></li>
          <li><a href="https://www.facebook.com/thoughtwin/"><img src="cid:facebook" alt="Facebook" /></a></li>
          <li><a href="https://in.linkedin.com/company/thoughtwin"><img src="cid:linkedin" alt="LinkedIn" /></a></li>
          <li><a href="https://www.instagram.com/thoughtwin_solutions/"><img src="cid:instagram" alt="Instagram" /></a></li>
        </ul>
        <p>© Thoughtwin 2022 All rights reserved</p>
      </div>
    </section>
  </body>
  </html>`;
}

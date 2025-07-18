export function generateEstimateEmailTemplate(user: { name: string }) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Project Estimate</title>
      <style>
        body {
          background-color: #f5f5f5;
          font-family: Arial, sans-serif;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #aaa;
          margin-top: 40px;
        }
        a.button {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background: #007bff;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Your Cost Estimate is Being Processed</h2>
          <p>Hello ${user.name || "Valued Client"},</p>
        </div>
  
        <p>You have successfully submitted your cost estimate information. Our managers have already received it and have started working on the calculation.</p>
        <p>As soon as it is ready, we will reach out to you.</p>
        <p>In any case, we will need to call you before we start working with you.</p>
  
        <p>
          You can <a class="button" href="https://yourbookinglink.com">book a call with us now</a> so that you don’t waste time, and we can serve you as quickly as possible.
        </p>
  
        <p>Best regards,<br/>The Project Team</p>
  
        <div class="footer">
          © ${new Date().getFullYear()} Thoughtwin. All rights reserved.
        </div>
      </div>
    </body>
    </html>`;
}

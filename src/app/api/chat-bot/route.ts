// app/api/contact/route.ts
import { NextResponse } from "next/server";
import path from "path";
import { PrismaClient } from "@prisma/client";
import * as nodemailer from "nodemailer";
import { generateContactHrEmailTemplate } from "@/utility/template/contactHrEmailTemplate";
import { generateUserEmailTemplate } from "@/utility/template/userEmailTemplate";

const prisma = new PrismaClient();
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // smtp.gmail.com
  port: Number(process.env.SMTP_PORT), // 587
  secure: false, // false for port 587
  auth: {
    user: process.env.SMTP_USER, // your Gmail address
    pass: process.env.SMTP_PASS, // App password
  },
  tls: {
    rejectUnauthorized: false, // only for local dev/testing
  },
});
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, description } = body;
    if (!name || !email || !phone || !description) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const chatBot = await prisma.chatBot.create({
      data: { name, email, phone, description },
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/email`);
    const data = await response.json();
    const emails = data.filter((email: any) => email.formType === "chatBotSupportEmail");
    emails[0].emails.forEach(async (email: any) => {
      await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        to: email,
        subject: `New Job Application Received`,
        html: generateContactHrEmailTemplate(chatBot),
        attachments: [
          {
            filename: "logo.png",
            path: path.join(process.cwd(), "public/assets/images/img/email_temp/logo1.png"),
            cid: "logoImg",
          },
          {
            filename: "email.png",
            path: path.join(process.cwd(), "public/assets/images/img/email_temp/email.png"),
            cid: "emailIcon",
          },
          {
            filename: "bg.png",
            path: path.join(process.cwd(), "public/assets/images/img/email_temp/bg.png"),
            cid: "bgImg",
          },
          {
            filename: "twitter.png",
            path: path.join(process.cwd(), "public/assets/images/img/email_temp/twitter.png"),
            cid: "twitter",
          },
          {
            filename: "facebook.png",
            path: path.join(process.cwd(), "public/assets/images/img/email_temp/facebook.png"),
            cid: "facebook",
          },
          {
            filename: "linkedin.png",
            path: path.join(process.cwd(), "public/assets/images/img/email_temp/linkedin.png"),
            cid: "linkedin",
          },
          {
            filename: "instagram.png",
            path: path.join(process.cwd(), "public/assets/images/img/email_temp/instagram.png"),
            cid: "instagram",
          },
        ],
      });
    });
    // Send email to HR

    // Send acknowledgement to applicant
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email as string,
      subject: `Thank You for Contacting Thoughtwin`,
      // `We received your application, ${name}`,
      html: generateUserEmailTemplate(chatBot),
      attachments: [
        {
          filename: "logo.png",
          path: path.join(process.cwd(), "public/assets/images/img/email_temp/logo1.png"),
          cid: "logoImg",
        },
        {
          filename: "email.png",
          path: path.join(process.cwd(), "public/assets/images/img/email_temp/email.png"),
          cid: "emailIcon",
        },
        {
          filename: "bg.png",
          path: path.join(process.cwd(), "public/assets/images/img/email_temp/bg.png"),
          cid: "bgImg",
        },
        {
          filename: "twitter.png",
          path: path.join(process.cwd(), "public/assets/images/img/email_temp/twitter.png"),
          cid: "twitter",
        },
        {
          filename: "facebook.png",
          path: path.join(process.cwd(), "public/assets/images/img/email_temp/facebook.png"),
          cid: "facebook",
        },
        {
          filename: "linkedin.png",
          path: path.join(process.cwd(), "public/assets/images/img/email_temp/linkedin.png"),
          cid: "linkedin",
        },
        {
          filename: "instagram.png",
          path: path.join(process.cwd(), "public/assets/images/img/email_temp/instagram.png"),
          cid: "instagram",
        },
      ],
    });

    return NextResponse.json({ message: "Contact saved", chatBot }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

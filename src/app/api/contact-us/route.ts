import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { PrismaClient } from "@prisma/client";
import * as nodemailer from "nodemailer";
import { generateContactHrEmailTemplate } from "@/utility/template/contactHrEmailTemplate";
import { generateUserEmailTemplate } from "@/utility/template/userEmailTemplate";

export const config = { api: { bodyParser: false } };

const prisma = new PrismaClient();

// ✅ Changed to storage/uploads instead of uploads
const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? process.cwd(), "uploads");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const {
      fullName,
      email,
      phoneNumber,
      description,
      interested,
      industry,
      budget,
      fileUrl,
    } = Object.fromEntries(formData);

    // ✅ Validate required fields
    if (!fullName || !email || !phoneNumber || !description || !interested || !industry || !budget || !fileUrl) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const file = fileUrl as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
    }

    // ✅ Validate file type
    const allowedTypes = ["application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ success: false, error: "Invalid file type" }, { status: 400 });
    }

    // ✅ Validate file size
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ success: false, error: "File must be under 10MB" }, { status: 400 });
    }

    if (!fs.existsSync(UPLOAD_DIR)) {
      try {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
      } catch (err) {
        console.error("Failed to create upload dir:", err);
      }
    }

    // ✅ Save the file
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(UPLOAD_DIR, fileName);
    await fs.promises.writeFile(filePath, buffer);
    const interestedArray = (interested as string)
  .split(",")
  .map((item) => item.trim())
  .filter((item) => !!item);
    // ✅ Save to DB
    const contact = await prisma.contactUs.create({
      data: {
        fullName: fullName as string,
        email: email as string,
        phoneNumber: phoneNumber as string,
        description: description as string,
        interested: interestedArray as unknown as string[],
        industry: industry as string,
        budget: budget as string,
        fileUrl: `/storage/uploads/${fileName}`,
      },
    });

    // ✅ Send email to HR
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/email`);
    const data = await response.json();
    const emails = data.filter((email: any) => email.formType === "contactSupportEmail");

    emails[0].emails.forEach(async (hrEmail: string) => {
      await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        to: hrEmail,
        subject: `New Job Application Received`,
        html: generateContactHrEmailTemplate(contact),
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

    // ✅ Send acknowledgment to applicant
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email as string,
      subject: `Thank You for Contacting Thoughtwin`,
      html: generateUserEmailTemplate(contact),
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

    return NextResponse.json({ message: "Contact saved", contact }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

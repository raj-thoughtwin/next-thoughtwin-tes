import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import { generateHrEmailTemplate } from "@/utility/template/hrEmailTemplate";
import { generateUserEmailTemplate } from "@/utility/template/userEmailTemplate";

const prisma = new PrismaClient();
const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? process.cwd(), "uploads");
const applyEmails = process.env.APPLY_EMAILS?.split(',').map(email => email.trim());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const {
      name,
      email,
      phoneNumber,
      currentLocation,
      relevantExperience,
      keySkills,
      noticePeriod,
      reasonForJobChange,
      resume,
    } = Object.fromEntries(formData);

    if (
      !name ||
      !email ||
      !phoneNumber ||
      !currentLocation ||
      !relevantExperience ||
      !keySkills ||
      !noticePeriod ||
      !resume
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const file = resume as unknown as File;
    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file uploaded" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "image/png",
      "image/jpeg",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: "Invalid file type" },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: "File must be under 10MB" },
        { status: 400 }
      );
    }

    // Ensure upload directory exists
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(UPLOAD_DIR, fileName);

    await fs.promises.writeFile(filePath, buffer);

    const jobApplication = await prisma.applyJob.create({
      data: {
        name: name as string,
        email: email as string,
        phoneNumber: phoneNumber as string,
        currentLocation: currentLocation as string,
        relevantExperience: relevantExperience as string,
        keySkills: keySkills as string,
        noticePeriod: noticePeriod as string,
        reasonForJobChange: reasonForJobChange as string | undefined,
        resume: `/uploads/${fileName}`, // Adjust if serving from different base
      },
    });
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/email`);
    const data = await response.json();
    const emails = data.filter((email: any) => email.formType === "jobSupportEmail");
    emails[0].emails.forEach(async (email: any) => {

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: `New Job Application Received`,
        //  `New Application from ${name}`,
        html: generateHrEmailTemplate(jobApplication),
        attachments: [
          {
            filename: file.name,
            path: filePath,
          },
          {
            filename: 'logo.png',
            path: path.join(process.cwd(), 'public/assets/images/img/email_temp/logo1.png'),
            cid: 'logoImg',
          },
          {
            filename: 'email.png',
            path: path.join(process.cwd(), 'public/assets/images/img/email_temp/email.png'),
            cid: 'emailIcon',
          },
          {
            filename: 'bg.png',
            path: path.join(process.cwd(), 'public/assets/images/img/email_temp/bg.png'),
            cid: 'bgImg',
          },
          {
            filename: 'twitter.png',
            path: path.join(process.cwd(), 'public/assets/images/img/email_temp/twitter.png'),
            cid: 'twitter',
          },
          {
            filename: 'facebook.png',
            path: path.join(process.cwd(), 'public/assets/images/img/email_temp/facebook.png'),
            cid: 'facebook',
          },
          {
            filename: 'linkedin.png',
            path: path.join(process.cwd(), 'public/assets/images/img/email_temp/linkedin.png'),
            cid: 'linkedin',
          },
          {
            filename: 'instagram.png',
            path: path.join(process.cwd(), 'public/assets/images/img/email_temp/instagram.png'),
            cid: 'instagram',
          },

        ],
      });
    });
    // Send email to HR

    // Send acknowledgement to applicant
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email as string,
      subject: `Thank You for Applying at Thoughtwin`,
      // `We received your application, ${name}`,
      html: generateUserEmailTemplate(jobApplication),
      attachments: [
        {
          filename: file.name,
          path: filePath,
        },
        {
          filename: 'logo.png',
          path: path.join(process.cwd(), 'public/assets/images/img/email_temp/logo1.png'),
          cid: 'logoImg',
        },
        {
          filename: 'email.png',
          path: path.join(process.cwd(), 'public/assets/images/img/email_temp/email.png'),
          cid: 'emailIcon',
        },
        {
          filename: 'bg.png',
          path: path.join(process.cwd(), 'public/assets/images/img/email_temp/bg.png'),
          cid: 'bgImg',
        },
        {
          filename: 'twitter.png',
          path: path.join(process.cwd(), 'public/assets/images/img/email_temp/twitter.png'),
          cid: 'twitter',
        },
        {
          filename: 'facebook.png',
          path: path.join(process.cwd(), 'public/assets/images/img/email_temp/facebook.png'),
          cid: 'facebook',
        },
        {
          filename: 'linkedin.png',
          path: path.join(process.cwd(), 'public/assets/images/img/email_temp/linkedin.png'),
          cid: 'linkedin',
        },
        {
          filename: 'instagram.png',
          path: path.join(process.cwd(), 'public/assets/images/img/email_temp/instagram.png'),
          cid: 'instagram',
        },

      ],
    });

    return NextResponse.json({
      success: true,
      name: file.name,
      applicationId: jobApplication.id,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

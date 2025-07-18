import nodemailer from "nodemailer";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { generateEstimateEmailTemplate } from "@/utility/template/projectEstimateTemplate";
import { generateTeamEstimateEmailTemplate } from "@/utility/template/TeamExtensionEmailTemplate";
import { generateTeamEstimateUserEmailTemplate } from "@/utility/template/TeamExtensionUserEmailTemplate";

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      step1Technology,
      step2Specialist,
      needExtension,
      step2SpecialistDesc,
      name,
      email,
      terms,
    } = body;

    const result = await prisma.teamExtensionStepper.create({
      data: {
        step1Technology,
        step2Specialist,
        needExtension,
        step2SpecialistDesc,
        name,
        email,
        terms,
      },
    });
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/email`
    );
    const data = await response.json();
    const emails = data.filter(
      (email: any) => email.formType === "calculatorSupportEmail"
    );
    emails[0].emails.forEach(async (email: any) => {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Team Extensiono Calculator Submission Received",
        html: generateTeamEstimateEmailTemplate(result),
        attachments: [
          {
            filename: "logo.png",
            path: path.join(
              process.cwd(),
              "public/assets/images/img/email_temp/logo1.png"
            ),
            cid: "logoImg",
          },
          {
            filename: "email.png",
            path: path.join(
              process.cwd(),
              "public/assets/images/img/email_temp/email.png"
            ),
            cid: "emailIcon",
          },
          {
            filename: "bg.png",
            path: path.join(
              process.cwd(),
              "public/assets/images/img/email_temp/bg.png"
            ),
            cid: "bgImg",
          },
          {
            filename: "twitter.png",
            path: path.join(
              process.cwd(),
              "public/assets/images/img/email_temp/twitter.png"
            ),
            cid: "twitter",
          },
          {
            filename: "facebook.png",
            path: path.join(
              process.cwd(),
              "public/assets/images/img/email_temp/facebook.png"
            ),
            cid: "facebook",
          },
          {
            filename: "linkedin.png",
            path: path.join(
              process.cwd(),
              "public/assets/images/img/email_temp/linkedin.png"
            ),
            cid: "linkedin",
          },
          {
            filename: "instagram.png",
            path: path.join(
              process.cwd(),
              "public/assets/images/img/email_temp/instagram.png"
            ),
            cid: "instagram",
          },
        ],
      });
    });

    // Send confirmation email
    await transporter.sendMail({
      from: `"Cost Estimator" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Team Extensiono Calculator Submission Received",
      html: generateTeamEstimateUserEmailTemplate(result),
      attachments: [
        {
          filename: "logo.png",
          path: path.join(
            process.cwd(),
            "public/assets/images/img/email_temp/logo1.png"
          ),
          cid: "logoImg",
        },
        {
          filename: "email.png",
          path: path.join(
            process.cwd(),
            "public/assets/images/img/email_temp/email.png"
          ),
          cid: "emailIcon",
        },
        {
          filename: "bg.png",
          path: path.join(
            process.cwd(),
            "public/assets/images/img/email_temp/bg.png"
          ),
          cid: "bgImg",
        },
        {
          filename: "twitter.png",
          path: path.join(
            process.cwd(),
            "public/assets/images/img/email_temp/twitter.png"
          ),
          cid: "twitter",
        },
        {
          filename: "facebook.png",
          path: path.join(
            process.cwd(),
            "public/assets/images/img/email_temp/facebook.png"
          ),
          cid: "facebook",
        },
        {
          filename: "linkedin.png",
          path: path.join(
            process.cwd(),
            "public/assets/images/img/email_temp/linkedin.png"
          ),
          cid: "linkedin",
        },
        {
          filename: "instagram.png",
          path: path.join(
            process.cwd(),
            "public/assets/images/img/email_temp/instagram.png"
          ),
          cid: "instagram",
        },
      ],
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error submitting form or sending mail:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

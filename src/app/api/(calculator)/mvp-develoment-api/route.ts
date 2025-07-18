import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server'
import path from "path";
import { PrismaClient } from '@prisma/client'
import { generateTeamEstimateEmailTemplate } from '@/utility/template/TeamExtensionEmailTemplate';
import { generateMVPHrEmailTemplate } from '@/utility/template/MVPHrEmailTemplate';
import { generateMVPUserEmailTemplate } from '@/utility/template/MVPUserEmailTemplate';

const prisma = new PrismaClient()

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const mvpData = await prisma.mvpDevelopmentStepper.create({
      data: {
        industry: body.industry,
        industryDesc: body.industryDesc,
        businessGoal: body.businessGoal,
        releaseProjectDate: body.releaseProjectDate,
        platformType: body.platformType,
        screenSize: body.screenSize,
        customDesign: body.customDesign,
        cloudPlateform: body.cloudPlateform,
        appFeature: body.appFeature,
        appFeatureDesc: body.appFeatureDesc,
        additionalInfo: body.additionalInfo,
        projectDelivery: body.projectDelivery,
        name: body.name,
        email: body.email,
        term: body.term
      }
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
        subject: 'MVP Development Cost Calculator Submission Received',
        html: generateMVPHrEmailTemplate(mvpData),
        attachments: [
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

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"Cost Estimator" <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: 'MVP Development Cost Calculator Submission Received',
      html: generateMVPUserEmailTemplate(mvpData),
      attachments: [
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

    return NextResponse.json(mvpData, { status: 201 })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
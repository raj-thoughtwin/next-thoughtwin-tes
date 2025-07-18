import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import path from "path";
import nodemailer from "nodemailer";
import { generateContactHrEmailTemplate } from '@/utility/template/contactHrEmailTemplate';
import { generateUserEmailTemplate } from '@/utility/template/userEmailTemplate';

const projectEmails = process.env.PROJECT_EMAILS?.split(',').map(email => email.trim());


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // Use TLS for port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    if (!body.fname || !body.lname || !body.email || !body.phone_number) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Save the data to the database
    const serviceForm = await prisma.serviceForm.create({
      data: {
        fname: body.fname,
        lname: body.lname,
        email: body.email,
        message: body.message || '',
        phone_number: body.phone_number,
      },
    });
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/email`);
    const data = await response.json();
    const emails = data.filter((email: any) => email.formType === "projectSupportEmail");
    emails[0].emails.forEach(async (email: any) => {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: `New Job Application Received – Kratika`,
        //  `New Application from ${name}`,
        html: generateContactHrEmailTemplate(serviceForm),
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
    // Send email to HR

    // Send acknowledgement to applicant
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: body.email as string,
      subject: `Thank You for Applying at Thoughtwin`,
      // `We received your application, ${name}`,
      html: generateUserEmailTemplate(serviceForm),
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
    return NextResponse.json({ success: true, data: serviceForm }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/service-form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
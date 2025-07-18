import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  
  try {
    const body = await req.json();
    const { emails, formType } = body;

    if (!emails) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }
    const emailData = await prisma.email.create({
      data: { emails, formType },
    });
    return NextResponse.json({ message: "Email saved", emailData }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const jobSupportEmails = await prisma.email.findMany();
    return NextResponse.json(jobSupportEmails, { status: 200 });
  } catch (error) {
    console.error("Error fetching Job Support Emails:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, emails, formType } = body;

    if (!id || !emails) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const updatedEmailData = await prisma.email.update({
      where: { id },
      data: { emails, formType },
    });

    return NextResponse.json({ message: "Email updated successfully", updatedEmailData }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
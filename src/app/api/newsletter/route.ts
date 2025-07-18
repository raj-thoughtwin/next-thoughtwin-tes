import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" });
  }
  const body = await req.json();
  const { email } = body;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ message: "Valid email is required" });
  }

  try {
    const existing = await prisma.newsletterSubscription.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json({ message: "Email already subscribed" });
    }

    await prisma.newsletterSubscription.create({
      data: { email },
    });

    return NextResponse.json({ message: "Subscription successful" });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

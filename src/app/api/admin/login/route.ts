import { signToken } from '@/lib/auth';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const mockAdmin = {
  email: 'admin@thoughtwin.com',
  passwordHash: bcrypt.hashSync('thoughtwin_777', 10),
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  // Normalize email to prevent case issues
  const normalizedEmail = email.trim().toLowerCase();
    console
  // Find user in the database
  const user = await prisma.admin.findUnique({
    where: { email: normalizedEmail },
  });

  // User not found
  if (!user) {
    return NextResponse.json({ error: 'User does not exist' }, { status: 404 });
  }

  // Validate password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  // Create token and set cookie
  const token = signToken({ email: user.email, role: user.role || 'admin' });

  const response = NextResponse.json({ success: true, user: { email: user.email } });
  response.cookies.set('admin_token', token, {
    path: '/',
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
  });

  return response;
}

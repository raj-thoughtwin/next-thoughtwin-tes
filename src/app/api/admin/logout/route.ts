import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  // Remove the cookie
  (await
    // Remove the cookie
    cookies()).set('admin_token', '', {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 0, // 👈 Required to remove cookie
  });

  return NextResponse.json({ message: 'Logged out' }, { status: 200 });
}

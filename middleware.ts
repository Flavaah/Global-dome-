import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from './auth/session';

const protectedRoutes = ['/dashboard', '/admin'];

export async function middleware(req: NextRequest) {
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    const session = await verifySession(req);
    if (!session || session.role !== 'admin' && req.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*']
};

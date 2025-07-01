import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "../auth/session";

export async function middleware(req: NextRequest) {
  const session = await verifySession(req);

  // Om användaren inte är inloggad, skicka till /login
  if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"]
};

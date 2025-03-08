import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Allow requests to /dashboard and assets (avoid infinite loop)
  if (
    req.nextUrl.pathname.startsWith('/dashboard') ||
    req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.next();
  }

  // Redirect all other requests to /dashboard
  return NextResponse.redirect(new URL('/dashboard', req.url));
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*', // Matches all paths
};

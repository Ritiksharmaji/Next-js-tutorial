import { NextResponse } from 'next/server';

/**
 * Middleware function that runs on every request.
 * Redirects users to `/login` if they are not already on that page.
 */
export function middleware(request) {
  console.log('Middleware is running');

  // If the current path is not /login, redirect to /login
  if (request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }


  // Otherwise, allow the request to continue
//   return NextResponse.next();
}

export const config = {
    // matcher :'/about/:path*'
     matcher :['/about/:path*', '/studentlist/:path*']
}
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard", "/profile", "/settings"];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    console.log(`[MIDDLEWARE] ${request.method} ${pathname}`);

    const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    );

    if (isProtected) {
        const token = request.cookies.get("token")?.value;

        if (!token) {
            const loginUrl = new URL("/login", request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};

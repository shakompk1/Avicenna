import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  const isLoggedIn = !!req.auth;
  const isLogin = pathname.startsWith("/login");
  if (!isLoggedIn && !isLogin) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  if (!isLoggedIn) return NextResponse.next();

  const isSuperAdmin = (req.auth?.user as any)?.isSuperAdmin === true;

  // Platform scope
  if (pathname.startsWith("/clinics") && !isSuperAdmin) {
    return NextResponse.redirect(new URL("/calendar", nextUrl));
  }

  // Clinic scope requires active clinic cookie for SUPER_ADMIN
  const isClinicRoute =
    pathname === "/calendar" ||
    pathname.startsWith("/patients") ||
    pathname.startsWith("/staff") ||
    pathname.startsWith("/rooms") ||
    pathname.startsWith("/shifts") ||
    pathname.startsWith("/absences") ||
    pathname.startsWith("/settings");

  if (isClinicRoute && isSuperAdmin) {
    const activeClinic = req.cookies.get("active_clinic_id")?.value;
    if (!activeClinic) {
      return NextResponse.redirect(new URL("/clinics", nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/superadmin/:path*",
    "/calendar",
    "/patients/:path*",
    "/staff/:path*",
    "/rooms/:path*",
    "/shifts/:path*",
    "/absences/:path*",
    "/settings/:path*",
    "/login",
    "/",
  ],
};

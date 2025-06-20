import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  // Maintenance mode activated
  if (
    maintenanceMode &&
    request.nextUrl.pathname !== "/maintenance" &&
    !request.nextUrl.pathname.startsWith("/_next") &&
    !request.nextUrl.pathname.startsWith("/static")
  ) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  // Maintenance mode deactivated
  if (!maintenanceMode && request.nextUrl.pathname === "/maintenance") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/:path*"],
};

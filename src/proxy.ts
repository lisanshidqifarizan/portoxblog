import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
	const t = req.cookies.get("token")?.value;

	if (!t) {
		return NextResponse.redirect(new URL("/signin?m=unauthorized", req.url));
	}

	try {
		const base64 = t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
		const payload = JSON.parse(atob(base64));

		const pathname = req.nextUrl.pathname;

		if (pathname.startsWith("/dashboard") && payload.role !== "admin") {
			return NextResponse.redirect(new URL("/", req.url));
		}
	} catch {
		return NextResponse.redirect(new URL("/signin?m=invalid", req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/profile/:path*"],
};

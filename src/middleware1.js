"use client";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
	afterAuth(auth, req, evt) {
		// handle users who aren't authenticated
		if (!auth.userId && !auth.isPublicRoute) {
			const url = req.nextUrl.clone();
			url.pathname = "/auth/SignIn";
			return NextResponse.redirect(url);
		} else {
			const url = req.nextUrl.clone();
			if (auth.userId && url.pathname == "/auth/SignIn") {
				url.pathname = "/";
				return NextResponse.redirect(url);
			}
		}

		// redirect them to organization selection page
	},
	publicRoutes: ["/", "/tracking", "/products", "/auth/signin", "/auth/signup"],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

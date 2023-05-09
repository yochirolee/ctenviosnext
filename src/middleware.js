import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { NextResponse } from "next/server";

export async function middleware(req) {
	const supabase = await createMiddlewareSupabaseClient({ req });
	const { data, error } = await supabase.auth.getSession();
	console.log(data?.session?.access_token, "DATA");
	if (!data?.session) {
		const signInUrl = new URL("auth/SignIn", req.url);
		return NextResponse.redirect(signInUrl);
	}

	return NextResponse.next();
}
export const config = {
	matcher: ["/cart:path*"]
};

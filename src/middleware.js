import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
	const res = NextResponse.next();
	const supabase = createMiddlewareSupabaseClient({ req, res });
	const { data, error } = await supabase.auth.getSession();
	console.log(data, error);

	return res;
}

import { NextResponse } from "next/server";

const HM_API_URL = "http://72.60.114.241/api/historial/envio";

export async function GET(request, { params }) {
	const startTime = Date.now();
	const { hbl } = await params;

	console.log(`[${new URL(request.url).pathname}] Start fetching HBL: ${hbl}`);

	if (!hbl) {
		return NextResponse.json({ historial: [] }, { status: 400 });
	}

	const url = `${HM_API_URL}/${hbl}/`;
	console.log(`[${hbl}] Calling HM API: ${url}`);

	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 2000); // 10s timeout

		const response = await fetch(url, {
			signal: controller.signal,
			next: { revalidate: 3600 } // Cache for 1 hour
		});

		clearTimeout(timeoutId);

		const duration = Date.now() - startTime;
		console.log(`[${hbl}] HM API returned status ${response.status} in ${duration}ms`);

		if (!response.ok) {
			return NextResponse.json({ historial: [] }, { status: response.status });
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		const duration = Date.now() - startTime;
		if (error.name === 'AbortError') {
			console.error(`[${hbl}] HM API request timed out after ${duration}ms`);
		} else {
			console.error(`[${hbl}] Error fetching HM history after ${duration}ms:`, error);
		}
		return NextResponse.json({ historial: [] }, { status: 504 }); // Gateway Timeout
	}
}


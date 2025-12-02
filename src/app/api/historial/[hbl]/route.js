import { NextResponse } from "next/server";

const HM_API_URL = "http://72.60.114.241/api/historial/envio";

export async function GET(request, { params }) {
	const { hbl } = params;

	if (!hbl) {
		return NextResponse.json({ historial: [] }, { status: 400 });
	}

	const response = await fetch(`${HM_API_URL}/${hbl}`);

	if (!response.ok) {
		return NextResponse.json({ historial: [] }, { status: response.status });
	}

	const data = await response.json();
	return NextResponse.json(data);
}


import { HeroTracking } from "@/Components/Hero/HeroTracking";
import { TrackingContent } from "@/Components/Content/TrackingContent";
import { Suspense } from "react";
import { Stats } from "@/Components/Stats/Stats";

export const metadata = {
	title: "Rastrear Envío a Cuba - Tracking de Paquetes | CTEnvios",
	description:
		"Rastrea tu paquete enviado a Cuba en tiempo real. Ingresa tu número de tracking para ver el estado actual de tu envío. Seguimiento de envíos marítimos y aéreos a Cuba.",
	keywords: [
		"Rastrear paquete Cuba",
		"Tracking envío Cuba",
		"Seguimiento de paquetes a Cuba",
		"Estado de envío a Cuba",
		"Número de tracking Cuba",
		"Localizar paquete Cuba",
	],
	alternates: {
		canonical: "/tracking",
	},
	openGraph: {
		title: "Rastrear Envío a Cuba - CTEnvios Tracking",
		description:
			"Rastrea tu paquete a Cuba en tiempo real. Ingresa tu número de seguimiento para ver actualizaciones.",
		url: "https://ctenvios.com/tracking",
		siteName: "CTEnvios",
		locale: "es_ES",
		type: "website",
	},
};

const Tracking = () => {
	return (
		<Suspense fallback={<div>Cargando...</div>}>
			<HeroTracking />
			<Stats />
			<TrackingContent />
		</Suspense>
	);
};

export default Tracking;

//import Script from "next/script";
import NavBar from "@/Components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer/Footer";
import QueryProvider from "@/Utils/Providers/QueryProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	preload: true,
});

export const metadata = {
	title: "CTEnvios - Envíos a Cuba Rápidos y Confiables",
	description:
		"CTEnvios ofrece servicios de envío a Cuba seguros y económicos. Envía paquetes, remesas, alimentos y más a tus seres queridos en Cuba con garantía y rapidez.",
	generator: "Next.js",
	applicationName: "CTEnvios",
	referrer: "origin-when-cross-origin",
	keywords: [
		"Envíos a Cuba",
		"Paquetes a Cuba",
		"Remesas a Cuba",
		"Envío maritimo y aereo a Cuba",
		"Servicios de mensajería a Cuba",
		"Agencia de envios  a Cuba",
		"Autos, Carros  para Cuba",
		"Motos para Cuba",
		"Enviar dinero a Cuba",
		"Enviar comida a Cuba",
		"Envíos seguros a Cuba",
		"Mejor servicio de envíos a Cuba",
		"Envíos garantizados a Cuba",
		"Precios de envíos a Cuba",
		"Agencia de envios a Cuba",
	],
	authors: [{ name: "CTEnvios Team" }],
	creator: "CTEnvios",
	publisher: "CTEnvios",
	icons: {
		icon: "/ctelogo.ico",
		shortcut: "/ctelogo.ico",
		apple: "/ctelogo.ico",
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: "CTEnvios -Agencia de Envíos a Cuba Rápidos y Confiables",
		description:
			"Agencia de envíos a Cuba seguros y económicos. Envía paquetes y más a tus seres queridos en Cuba.",
		url: "https://www.ctenvios.com",
		siteName: "CTEnvios",
		images: [
			{
				url: "https://www.ctenvios.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "CTEnvios - Envíos a Cuba",
				type: "image/jpeg",
			},
		],
		locale: "es_ES",
		alternateLocale: ["en_US"],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "CTEnvios - Agencia de Envíos a Cuba Rápidos y Confiables",
		description:
			"Agencia de envíos a Cuba seguros y económicos. Envía paquetes y más a tus seres queridos en Cuba.",
		creator: "@ctenvios",
		images: {
			url: "https://www.ctenvios.com/twitter-image.jpg",
			alt: "CTEnvios - Envíos a Cuba",
		},
	},
	verification: {
		google: "B5Vgy5pZSGjmc9UX3WAcWCk-sBe_yUesP-DIZ7fDe2k",
	},
};

export const links = [
	{ rel: "preconnect", href: "https://www.google-analytics.com" },
	{ rel: "preconnect", href: "https://www.googletagmanager.com", crossOrigin: "anonymous" },
	{ rel: "dns-prefetch", href: "https://www.google-analytics.com" },
	{ rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
];

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<div className="relative isolate pt-4 max-w-7xl mx-auto sm:px-6 lg:pt-14 lg:px-8">
					<header>
						<NavBar />
					</header>
					<QueryProvider>{children}</QueryProvider>
				</div>

				<Footer />
			</body>
			<GoogleAnalytics gaId="G-E53C6QQ7Z8" strategy="afterInteractive" />
		</html>
	);
}

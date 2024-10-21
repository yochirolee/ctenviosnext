//import Script from "next/script";
import NavBar from "@/Components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer/Footer";
import QueryProvider from "@/Utils/Providers/QueryProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
	title: "CTEnvios - Envíos a Cuba Rápidos y Confiables",
	description:
		"CTEnvios ofrece servicios de envío a Cuba seguros y económicos. Envía paquetes  y más a tus seres queridos en Cuba.",
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
	openGraph: {
		title: "CTEnvios - Envíos a Cuba Rápidos y Confiables",
		description:
			"Servicios de envío a Cuba seguros y económicos. Envía paquetes y más a tus seres queridos en Cuba.",
		url: "https://www.ctenvios.com",
		siteName: "CTEnvios",
		images: [
			{
				url: "https://www.ctenvios.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "CTEnvios - Envíos a Cuba",
			},
		],
		locale: "es_ES",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "CTEnvios - Envíos a Cuba Rápidos y Confiables",
		description:
			"Servicios de envío a Cuba seguros y económicos. Envía paquetes y más a tus seres queridos en Cuba.",
		images: ["https://www.ctenvios.com/twitter-image.jpg"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={inter.className}>
				{/* <Script
					src="https://www.googletagmanager.com/gtag/js?id=AW-11165948511"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){window.dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'AW-11165948511');
                        `}
				</Script> */}

				<div className="relative isolate pt-4 max-w-7xl mx-auto  sm:px-6 lg:pt-14 lg:px-8">
					<QueryProvider>
						<NavBar />
						{children}
						<Footer />
					</QueryProvider>
				</div>
			</body>
		</html>
	);
}

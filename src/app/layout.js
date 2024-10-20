//import Script from "next/script";
import NavBar from "@/Components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer/Footer";
import QueryProvider from "@/Utils/Providers/QueryProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
	title: "CTEnvios - Envios a Cuba | Alimentos, Medicinas y Miscelaneas",
	description:
		"Servicio confiable de envíos de alimentos, medicinas y misceláneas a Cuba. Rápido, seguro y económico. ¡Haz tu envío hoy!",
	icons: {
		icon: "/ctelogo.ico",
		shortcut: "/ctelogo.ico",
		apple: "/ctelogo.ico",
	},
	openGraph: {
		title: "CTEnvios - Envios a Cuba | Alimentos, Medicinas y Miscelaneas",
		description: "Agencia de Envios a Cuba.",
		type: "website",
		url: "https://www.ctenvios.com",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "CTEnvios - Envios a Cuba",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "CTEnvios - Envios a Cuba | Alimentos, Medicinas y Miscelaneas",
		description: "Agencia de Envios a Cuba. Rápido, seguro y económico.",
		images: ["/twitter-image.jpg"],
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

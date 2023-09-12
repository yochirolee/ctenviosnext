import Script from "next/script";
import NavBar from "@/Components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer/Footer";
import QueryProvider from "@/Utils/Providers/QueryProvider";
import Head from "next/head";
import ShoppingCart from "@/Components/Cart/ShoppingCart";
import { AuthProvider } from "@/Utils/Providers/AuthProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "CTEnvios - Envios a Cuba",
	description: "Envios de alimentos, medicinas y miscelaneas a Cuba",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<Script
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
				</Script>
				<Head>
					<title>{metadata.title}</title>
					<link rel="shortcut icon" href="../public/favicon.ico" />
				</Head>

				<div className="relative isolate pt-4 max-w-7xl mx-auto px-2 sm:px-6 lg:pt-14 lg:px-8">
					<ClerkProvider>
						<QueryProvider>
							<NavBar />
							{children}
							<Analytics />
							<ShoppingCart />
							<Footer />
						</QueryProvider>
					</ClerkProvider>
				</div>
			</body>
		</html>
	);
}

import Script from "next/script";
import NavBar from "@/Components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer/Footer";
import QueryProvider from "@/Utils/Providers/QueryProvider";
import Head from "next/head";
import ShoppingCart from "@/Components/Cart/ShoppingCart";
import SupabaseProvider from "@/Utils/Providers/SupabaseProvider";
import { AuthProvider } from "@/Utils/Providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "CTEnvios",
	description: "Envios a Latinoameria y el Caribe",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
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

				<div className="relative isolate pt-4 max-w-7xl mx-auto px-6 lg:pt-14 lg:px-8">
					<SupabaseProvider>
						<QueryProvider>
							<AuthProvider>
								<NavBar />
								{children}
								<ShoppingCart />
								<Footer />
							</AuthProvider>
						</QueryProvider>
					</SupabaseProvider>
				</div>
			</body>
		</html>
	);
}

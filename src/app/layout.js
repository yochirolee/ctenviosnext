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
				<Head>
					<title>My awesome store</title>
					<link rel="preconnect" href="<https://app.snipcart.com>" />
					<link rel="preconnect" href="<https://cdn.snipcart.com>" />
					<link
						rel="stylesheet"
						href="<https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css>"
					/>
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
					<div
						id="Snipcart"
						data-api-key="MDEwNDVlN2MtMWE2Yy00ODQ5LTk1NjUtMGExNDZmYTQ4OTBlNjM4MTg1NzQ4NDM2NTM2NTM4
"
						hidden
					></div>
				</div>
			</body>
		</html>
	);
}

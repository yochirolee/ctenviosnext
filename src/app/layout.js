import NavBar from "@/Components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "CTEnvios",
	description: "Envios a Latinoameria y el Caribe",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="relative isolate max-w-7xl mx-auto px-6 lg:pt-14 lg:px-8">
					<NavBar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}

import NavBar from "@/Components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Caribe Travel Express",
	description: "Envios a Latinoamerica y el Caribe inclui",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar />
				<div className="relative isolate  px-6 lg:pt-14 lg:px-8">{children}</div>
				<Footer />
			</body>
		</html>
	);
}

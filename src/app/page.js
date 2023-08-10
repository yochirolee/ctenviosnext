import { Analytics } from "@vercel/analytics/react";
import { DuraderosCard } from "@/Components/Cards/DuraderosCard";
import { MedicinasCard } from "@/Components/Cards/MedicinasCard";
import { MiscelaneasCard } from "@/Components/Cards/MiscelaneasCard";
import { Faq } from "@/Components/Faq/Faq";
import { Hero } from "@/Components/Hero/Hero";
import NewsLetter from "@/Components/Newsletter/Newsletter";
import { SocialMedia } from "@/Components/SocialMedia/SocialMedia";
import ProductsList from "@/Components/Products/ProductsList";
import ShoppingCart from "@/Components/Cart/ShoppingCart";

export default function Home() {
	return (
		<main>
			<Hero />
			<div className="grid align-top mx-auto  justify-center pb-20  lg:px-46 lg:grid-cols-3 gap-10   ">
				<div className="lg:col-span-4">
					<h2 className="text-base font-semibold leading-7 text-blue-500">
						Nuestros Principales Servicios
					</h2>
					<p className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 xl:text-3xl xl:leading-[2.5rem]">
						Envios de Duraderos, Miscelaneas y Medicinas...
					</p>
				</div>
				<DuraderosCard />
				<MiscelaneasCard />
				<MedicinasCard />
			</div>
			<ProductsList />

			<SocialMedia />

			<Faq />
			<NewsLetter />

			<Analytics />
			<ShoppingCart />
		</main>
	);
}

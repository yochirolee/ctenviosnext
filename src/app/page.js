import { DuraderosCard } from "@/Components/Cards/DuraderosCard";
import { MedicinasCard } from "@/Components/Cards/MedicinasCard";
import { MiscelaneasCard } from "@/Components/Cards/MiscelaneasCard";
import { Faq } from "@/Components/Faq/Faq";
import { Hero } from "@/Components/Hero/Hero";
import NewsLetter from "@/Components/Newsletter/Newsletter";
import Partners from "@/Components/Partners/Partners";

export default function Home() {
	return (
		<main>
			<Hero />
			<div className="grid align-top  justify-center pb-20  lg:px-46 lg:grid-cols-3 mx-auto gap-10   ">
				<div class="lg:col-span-4">
					<h2 class="text-base font-semibold leading-7 text-blue-500">Nuestros Principales Servicios</h2>
					<p class="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 xl:text-3xl xl:leading-[2.5rem]">
						Envios de Duraderos, Miscelaneas y Medicinas...
					</p>
				</div>
				<DuraderosCard />
				<MiscelaneasCard />
				<MedicinasCard />
			</div>
			<Partners />
			<Faq />
			<NewsLetter />
		</main>
	);
}

import { DuraderosCard } from "@/Components/Cards/DuraderosCard";
import { MedicinasCard } from "@/Components/Cards/MedicinasCard";
import { MiscelaneasCard } from "@/Components/Cards/MiscelaneasCard";
import { TrackingContent } from "@/Components/Content/TrackingContent";
import { Faq } from "@/Components/Faq/Faq";
import { Hero } from "@/Components/Hero/Hero";
import NewsLetter from "@/Components/Newsletter/Newsletter";
import { SocialMedia } from "@/Components/SocialMedia/SocialMedia";
import { Stats } from "@/Components/Stats/Stats";

export default function Home() {
	return (
		<main>
			<Hero />

			<div className="grid align-top mx-auto p-4  justify-center pb-20  lg:px-46 lg:grid-cols-3 gap-10   ">
				<div className="lg:col-span-4">
					<h2 className="text-base font-semibold leading-7 text-sky-700">
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
		
			<Stats />
			<TrackingContent />
			<SocialMedia />
			<Faq />
			<NewsLetter />
		</main>
	);
}

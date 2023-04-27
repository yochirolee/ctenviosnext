import { DuraderosCard } from "@/Components/Cards/DuraderosCard";
import { MedicinasCard } from "@/Components/Cards/MedicinasCard";
import { MiscelaneasCard } from "@/Components/Cards/MiscelaneasCard";
import { Hero } from "@/Components/Hero/Hero";
import NewsLetter from "@/Components/Newsletter/Newsletter";
import Partners from "@/Components/Partners/Partners";

export default function Home() {
	return (
		<main>
			<Hero />
			<div className="grid align-top container justify-center pb-20 px-10 lg:px-46 lg:grid-cols-3 mx-auto gap-10   ">
				<DuraderosCard />
				<MiscelaneasCard />
				<MedicinasCard />
			</div>
			<Partners />
			<NewsLetter />
		</main>
	);
}

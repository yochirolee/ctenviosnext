import { DuraderosCard } from "@/Components/Cards/DuraderosCard";
import { MedicinasCard } from "@/Components/Cards/MedicinasCard";
import { MiscelaneasCard } from "@/Components/Cards/MiscelaneasCard";
import { Hero } from "@/Components/Hero/Hero";
import NewsLetter from "@/Components/Newsletter/Newsletter";
import { ProductsList } from "@/Components/Products/ProductsList";
import { TrackingDetails } from "@/Components/TrackingDetails/TrackingDetails";

export default function Home() {
	return (
		<main>
			<Hero />
			<div className="grid container pb-20 px-10 lg:px-46 lg:grid-cols-3 mx-auto gap-10 items-center  ">
				<DuraderosCard />
				<MiscelaneasCard />
				<MedicinasCard />
			</div>
			<NewsLetter />
			<ProductsList />
			<TrackingDetails />
		</main>
	);
}

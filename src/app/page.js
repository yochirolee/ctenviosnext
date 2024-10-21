import { TrackingContent } from "@/Components/Content/TrackingContent";
import { Faq } from "@/Components/Faq/Faq";
import { Hero } from "@/Components/Hero/Hero";
import NewsLetter from "@/Components/Newsletter/Newsletter";
import { SocialMedia } from "@/Components/SocialMedia/SocialMedia";
import { Stats } from "@/Components/Stats/Stats";
import TrackingSection from "./sections/tracking-section";
import PriceCards from "@/Components/Cards/PricesCards";

export default function Home() {
	return (
		<main>
			<Hero />
			<PriceCards />

			{/* <FeaturedProducts /> */}
			<TrackingSection />
			<Stats />
			<TrackingContent />
			<SocialMedia />
			<Faq />
			<NewsLetter />
		</main>
	);
}

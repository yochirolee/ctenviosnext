import { TrackingContent } from "@/Components/Content/TrackingContent";
import { Hero } from "@/Components/Hero/Hero";
import NewsLetter from "@/Components/Newsletter/Newsletter";
import { SocialMedia } from "@/Components/SocialMedia/SocialMedia";
import { Stats } from "@/Components/Stats/Stats";
import TrackingSection from "./sections/tracking-section";
import Faq from "@/Components/Faq/Faq";
import dynamic from "next/dynamic";
import PriceCards from "@/Components/Cards/PricesCards";

const FeaturedProducts = dynamic(() => import("./sections/feaured-products"), {
	loading: () => <p>Loading featured products...</p>,
	ssr: true,
});

export default function Home() {
	return (
		<main>
			<Hero />
			<PriceCards />
			<TrackingSection />
			<Stats />
			<TrackingContent />
			<SocialMedia />
			<Faq />
			<NewsLetter />
		</main>
	);
}

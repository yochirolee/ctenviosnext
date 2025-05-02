import { lazy, Suspense } from "react";
import { TrackingContent } from "@/Components/Content/TrackingContent";
import { Hero } from "@/Components/Hero/Hero";
import NewsLetter from "@/Components/Newsletter/Newsletter";
import { SocialMedia } from "@/Components/SocialMedia/SocialMedia";
import { Stats } from "@/Components/Stats/Stats";
import Faq from "@/Components/Faq/Faq";

const PriceCards = lazy(() => import("@/Components/Cards/PricesCards"));
const TrackingSection = lazy(() => import("./sections/tracking-section"));

const LoadingFallback = ({ height }) => (
	<div className={`flex justify-center items-center ${height}`}>
		<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
	</div>
);
export default function Home() {
	return (
		<main>
			<Hero />
			<Suspense fallback={<LoadingFallback height="h-80" />}>
				<PriceCards />
				<TrackingSection />
			</Suspense>
			<Stats />
			<TrackingContent />
			<SocialMedia />
			<Faq />
			<NewsLetter />
		</main>
	);
}

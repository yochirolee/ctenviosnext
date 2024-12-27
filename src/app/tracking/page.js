"use client";
import { HeroTracking } from "@/Components/Hero/HeroTracking";
import { TrackingContent } from "@/Components/Content/TrackingContent";
import { React, Suspense } from "react";
import { Stats } from "@/Components/Stats/Stats";

const Tracking = () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<HeroTracking />
				<Stats />
				<TrackingContent />
			</Suspense>
		</>
	);
};
export default Tracking;

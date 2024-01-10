"use client";
import { HeroTracking } from "@/Components/Hero/HeroTracking";
import { TrackingContent } from "@/Components/Content/TrackingContent";
import { React } from "react";
import { Stats } from "@/Components/Stats/stats";

const Tracking = () => {
	return (
		<>
			<HeroTracking />
			<Stats />
			<TrackingContent />
		</>
	);
};
export default Tracking;

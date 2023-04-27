"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { HeroTracking } from "@/Components/Hero/HeroTracking";
import { React } from "react";

const queryClient = new QueryClient();

const Tracking = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<HeroTracking />
		</QueryClientProvider>
	);
};
export default Tracking;

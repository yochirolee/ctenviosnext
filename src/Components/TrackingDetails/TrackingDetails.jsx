import { React } from "react";
import { TrackingCard } from "../Cards/TrackingCard";

export const TrackingDetails = ({ result }) => {
	if (!result) return;
	return (
		<div className="flex  flex-col gap-4 max-w-2xl mx-auto ">
			{result?.Products ? (
				result?.Products?.map((product) => <TrackingCard key={product?.HBL} product={product} />)
			) : (
				<TrackingCard product={result} />
			)}
		</div>
	);
};

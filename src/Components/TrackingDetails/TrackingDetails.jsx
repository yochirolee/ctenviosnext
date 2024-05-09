import { React } from "react";
import { TrackingCard } from "../Cards/TrackingCard";

export const TrackingDetails = ({ invoice }) => {
	if (!invoice || invoice.length == 0) return;

	return (
		<div className="flex  flex-col  gap-4 max-w-2xl mx-auto ">
			{invoice?.parcels &&
				invoice?.parcels?.map((parcel, index) => (
					<TrackingCard key={index} parcel={parcel} invoice={invoice} />
				))}
		</div>
	);
};

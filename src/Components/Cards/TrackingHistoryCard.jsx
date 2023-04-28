import { useQuery } from "@tanstack/react-query";
import { fetchProductTrackingHistory } from "@/Hooks/fetchProductTrackingHistory";
import { format, parseISO } from "date-fns";

import {
	CheckIcon,
	ClipboardDocumentCheckIcon,
	DocumentTextIcon,
	HomeIcon,
	ShieldCheckIcon,
	TicketIcon,
	TruckIcon,
} from "@heroicons/react/24/outline";

export const TrackingHistoryCard = ({ product }) => {
	const { data: productsDetails } = useQuery(["productHistory", product?.HBL], () =>
		fetchProductTrackingHistory(product),
	);
	return (
		<>
			<ul className=" space-y-8 border-l border-slate-900/10 pl-4 text-sm leading-6 text-slate-700">
				{productsDetails?.map((location, index) => (
					<li key={index} className="flex items-center">
						{location?.Icon}
						<p className="ml-5 ">
							<strong className="font-semibold text-slate-900">
								{location?.Location} {location?.Container}
							</strong>
							<p>
								{location?.CreatedAt ? format(parseISO(location?.CreatedAt), "MMM d h:mm a") : ""}
							</p>
						</p>
					</li>
				))}
			</ul>
		</>
	);
};

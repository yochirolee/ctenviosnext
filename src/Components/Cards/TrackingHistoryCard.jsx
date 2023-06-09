import { useQuery } from "@tanstack/react-query";
import {
	fetchProductTrackingHistory,
	useFetchProductTrackingHistory,
} from "@/Hooks/useFetchProductTrackingHistory";
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
	const { data: productsDetails } = useFetchProductTrackingHistory(product);
	return (
		<>
			<ul className=" space-y-8 lg:border-l  border-slate-900/10 pl-4 text-sm leading-6 text-slate-700">
				{productsDetails?.map((location, index) => (
					<li key={index} className="flex items-center ">
						<CheckIcon className="w-6 h-6 text-[#0EA5E9]" />
						<p className="ml-5 flex flex-col ">
							<strong className="font-semibold  text-slate-900">
								{location?.Location} {location?.Container}
							</strong>
							<span className="text-xs text-[#0EA5E9]">
								{location?.CreatedAt ? format(parseISO(location?.CreatedAt), "MMM d y h:mm a") : ""}
							</span>
						</p>
					</li>
				))}
			</ul>
		</>
	);
};

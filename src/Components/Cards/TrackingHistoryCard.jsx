import { useQuery } from "@tanstack/react-query";
import { fetchProductTrackingHistory } from "@/Hooks/fetchProductTrackingHistory";
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
	const {
	
		data: productsDetails,
		
	} = useQuery(["productHistory", product?.HBL], () => fetchProductTrackingHistory(product));
	console.log(productsDetails, "RPDOCUTS DETAULS");
	return (
		<>
			<ul className=" space-y-8 border-l border-slate-900/10 pl-4 text-sm leading-6 text-slate-700">
				{productsDetails?.map((location, index) => (
					<li key={index} className="flex items-center">
						<DocumentTextIcon className="w-6 h-6 text-[#0EA5E9]" />
						<p className="ml-5">
							<strong className="font-semibold text-slate-900">
								{location?.Location} {location?.Container}
							</strong>
							{location?.CreatedAt}
						</p>
					</li>
				))}
			</ul>
		</>
	);
};

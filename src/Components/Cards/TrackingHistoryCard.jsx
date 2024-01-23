import { format, parseISO } from "date-fns";
import { CheckIcon } from "@heroicons/react/24/outline";

export const TrackingHistoryCard = ({ pack, invoice }) => {
	return (
		<>
			<ul className=" space-y-8 lg:border-l  border-slate-900/10 pl-4 text-sm leading-6 text-slate-700">
				{pack?.trackingHistory?.map((location, index) =>
					location?.createdAt ? (
						<li key={index} className="flex items-center ">
							<CheckIcon className="w-6 h-6 text-[#0EA5E9]" />
							<p className="ml-5 flex flex-col ">
								<strong className="flex font-semibold gap-2 text-slate-900">
									{location?.location}
									{location?.location == "En Contenedor" ? " " + invoice?.containerName : ""}
								</strong>
								<span className="text-xs text-[#0EA5E9]">
									{format(parseISO(location?.createdAt), "MMM d y")
										? format(parseISO(location?.createdAt), "MMM d y")
										: ""}
								</span>
							</p>
						</li>
					) : (
						""
					),
				)}
			</ul>
		</>
	);
};

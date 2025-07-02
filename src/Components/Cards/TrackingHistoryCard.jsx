import { format, parseISO } from "date-fns";
import { CheckIcon } from "@heroicons/react/24/outline";

export const TrackingHistoryCard = ({ events }) => {
	if (!events) return;

	return (
		<ul className=" space-y-8 lg:border-l  border-slate-900/10 pl-4 text-sm leading-6 text-slate-700">
			{[...events].reverse().map((event, index) => (
				<li key={index} className="flex  items-center ">
					<CheckIcon className="w-6 h-6 text-[#0EA5E9]" />
					<p className="ml-5 flex flex-col ">
						<strong className="flex font-semibold gap-2 text-slate-900">
							{event?.location}
						</strong>
						<span className="text-xs text-[#0EA5E9]">
							{event?.updatedAt !== "0000-00-00"
								? format(parseISO(event?.updatedAt), "MMM d y")
								: ""}
						</span>
					</p>
				</li>
			))}
		</ul>
	);
};

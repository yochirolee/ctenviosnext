import { format, parseISO } from "date-fns";
import { CheckIcon, TruckIcon } from "@heroicons/react/24/outline";

const LoadingSpinner = () => (
	<div className="flex items-center justify-center py-4">
		<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#0EA5E9]"></div>
		<span className="ml-2 text-sm text-slate-500">Cargando historial...</span>
	</div>
);

const getEventIcon = (statusCode) => {
	if (statusCode === "DELIVERED") {
		return <TruckIcon className="w-6 h-6 text-green-500" />;
	}
	return <CheckIcon className="w-6 h-6 text-[#0EA5E9]" />;
};

const formatEventDate = (timestamp) => {
	if (!timestamp || timestamp === "0000-00-00") return "";
	
	try {
		const date = parseISO(timestamp);
		if (isNaN(date.getTime())) return "";
		return format(date, "MMM d, yyyy HH:mm");
	} catch {
		return "";
	}
};

export const TrackingHistoryCard = ({ events, isLoading }) => {
	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!events || events.length === 0) {
		return (
			<div className="text-sm text-slate-500 py-4">
				No hay eventos disponibles
			</div>
		);
	}

	return (
		<ul className="space-y-8 lg:border-l border-slate-900/10 pl-4 text-sm leading-6 text-slate-700">
			{[...events].reverse().map((event, index) => (
				<li key={index} className="flex items-start">
					{getEventIcon(event.statusCode)}
					<div className="ml-5 flex flex-col">
						<strong
							className={`flex font-semibold gap-2 ${
								event.statusCode === "DELIVERED"
									? "text-green-600"
									: "text-slate-900"
							}`}
						>
							{event.statusName}
						</strong>
						{event.location && (
							<span className="text-xs text-slate-600">{event.location}</span>
						)}
						{formatEventDate(event.timestamp) && (
							<span className="text-xs text-[#0EA5E9] mt-1">
								{formatEventDate(event.timestamp)}
							</span>
						)}
					</div>
				</li>
			))}
		</ul>
	);
};

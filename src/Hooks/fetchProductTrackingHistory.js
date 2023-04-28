import { supabase } from "@/Supabase/SupabaseClient";
import {
	CheckIcon,
	ClipboardDocumentCheckIcon,
	DocumentTextIcon,
	HomeIcon,
	ShieldCheckIcon,
	TicketIcon,
	TruckIcon,
} from "@heroicons/react/24/outline";
import { MdGroup } from "react-icons/md";

const createLocation = (index, product) => {
	switch (index) {
		case 0:
			return {
				HBL: product.HBL,
				Location: "Facturado",
				Icon: <DocumentTextIcon className="w-6 h-6 text-[#0EA5E9]" />,
			};

		case 1:
			return {
				HBL: product.HBL,
				Location: "En Almacen",
				Icon: <HomeIcon className="w-6 h-6 text-[#0EA5E9]" />,
			};

		case 2:
			return {
				HBL: product.HBL,
				Location: "En Pallet" + " " + product.Pallet,
				Icon: <ClipboardDocumentCheckIcon className="w-6 h-6 text-[#0EA5E9]" />,
			};

		case 3:
			return {
				HBL: product.HBL,
				Location: "En Contenedor",
				Container: product.ContainerNumber,
			};

		default:
			break;
	}
};

const createProductHistory = (product) => {
	if (!!product) {
		let trackingHistory = [];

		for (let index = 0; index <= product.Location; index++) {
			const history = createLocation(index, product);
			trackingHistory = [...trackingHistory, history];
		}
		trackingHistory.reverse();
		return trackingHistory;
	}
	return null;
};

export const fetchProductTrackingHistory = async (product) => {
	if (!product) return;
	let productHistory = createProductHistory(product);

	let { data: trackingHistory, error } = await supabase
		.from("productsTrackingHistory")
		.select(
			`
		CreatedAt,
		locations (  
		  LocationName
		  
		)
	  `,
		)
		.order("CreatedAt", { ascending: false })
		.eq("HBL", product.HBL);

	let tracking = trackingHistory?.map((location) => ({
		HBL: location?.HBL,
		Location: location?.locations?.LocationName,
		CreatedAt: location?.CreatedAt,
		Icon: <CheckIcon className="w-6 h-6 text-[#0EA5E9]" />,
	}));

	if (error) throw new Error(error.message);
	if (tracking) productHistory = [...tracking, ...productHistory];
	return productHistory;
};

import { useSupabase } from "@/Utils/Providers/SupabaseAuthProvider";
import { useQuery } from "@tanstack/react-query";

const createLocation = (index, product) => {
	switch (index) {
		case 0:
			return {
				HBL: product.HBL,
				Location: "Facturado",
			};

		case 1:
			return {
				HBL: product.HBL,
				Location: "En Almacen",
			};

		case 2:
			return {
				HBL: product.HBL,
				Location: "En Pallet" + " " + product.Pallet,
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

export const fetchProductTrackingHistory = async (product, supabase) => {
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
		.eq("HBL", product?.HBL);

	let tracking = trackingHistory?.map((location) => ({
		HBL: location?.HBL,
		Location: location?.locations?.LocationName,
		CreatedAt: location?.CreatedAt,
	}));

	if (error) throw new Error(error.message);
	if (tracking) productHistory = [...tracking, ...productHistory];
	return productHistory;
};
export const useFetchProductTrackingHistory = (product) => {
	const { supabase } = useSupabase();
	return useQuery(["getProductHistory", product], () =>
		fetchProductTrackingHistory(product, supabase),
	);
};

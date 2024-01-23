import { useQuery } from "@tanstack/react-query";

const getProductData = async (id) => {
	if (!id) return [];
	if (id.length >= 4 && id.length < 7) {
		const res = await fetch("https://ctenviosbackend.onrender.com/tracking/invoice/" + id);
		return await res.json();
	} else {
		const res = await fetch("https://ctenviosbackend.onrender.com/tracking/hbl/" + id);
		return await res.json();
	}
};

//https://ctenviosbackend.onrender.com/tracking

export const useFetchByInvoiceOrHBL = (id) => {
	let { data, isLoading, isError } = useQuery({
		queryKey: ["fetchProductByHBL", id],
		queryFn: () => getProductData(id),
		staleTime: 1000 * 60 * 5,
	});

	return { data, isLoading, isError };
};

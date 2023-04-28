import { useQuery } from "@tanstack/react-query";

const getProductData = async (id) => {
	if (id.length > 4 && id.length > 7) {
		const res = await fetch("https://caribe-cargo-api.vercel.app/api/products/" + id);
		return res.json();
	} else {
		const res = await fetch("https://caribe-cargo-api.vercel.app/api/invoices/" + id);

		return res.json();
	}
	return null;
};

export const useFetchByInvoiceOrHBL = (id) => {
	let { data, isLoading, isError } = useQuery(["fetchProductByHBL", id], () => getProductData(id));
	data = data ? data : null;
	return { data, isLoading, isError };
};

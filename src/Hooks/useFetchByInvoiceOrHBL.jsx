import { useQuery } from "@tanstack/react-query";

const getProductData = async (id) => {
	if (!id) return;
	if (id && id.length > 7) {
		const res = await fetch("https://caribe-cargo-api.vercel.app/api/products/" + id);
		return res.json();
	} else {
		const res = await fetch("https://caribe-cargo-api.vercel.app/api/invoices/" + id);

		return res.json();
	}
};

export const useFetchByInvoiceOrHBL = (id) => {
	return useQuery(["fetchProductByHBL", id], () => getProductData(id), {
		enabled: Boolean(id),
	});
};

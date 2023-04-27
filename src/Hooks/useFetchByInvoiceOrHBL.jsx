import { useQuery } from "@tanstack/react-query";

const getInvoiceById = async (id) => {
	const res = await fetch("https://caribe-cargo-api.vercel.app/api/invoices/" + id);

	return res.json();
};

const getProductByHBL = async (id) => {
	const res = await fetch("https://caribe-cargo-api.vercel.app/api/products/" + id);
	return res.json();
};

export const useFetchByInvoiceOrHBL = (id) => {
	if (id && id.length > 7) {
		return useQuery(["fetchProductByHBL", id], () => getProductByHBL(id), {
			enabled: Boolean(id),
		});
	} else {
		return useQuery(["fetchInvoiceById", id], () => getInvoiceById(id), {
			enabled: Boolean(id),
		});
	}
};

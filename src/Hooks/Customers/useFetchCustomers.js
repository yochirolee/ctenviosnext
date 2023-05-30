import { useQuery } from "@tanstack/react-query";

const getCustomers = async () => {
	const res= await fetch("https://caribeagencia-backend.vercel.app/api/v1/customers");
     return res.json();
};

export const useFetchCustomers = () => {
	return useQuery(["fetchCustomers"], () => getCustomers());
};

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getCustomers = async () => {
	const res = await fetch("https://caribeagencia-backend.vercel.app/api/v1/customers");
	return await res.json();
};

const updateCustomer = (customer) => {
	try {
		const res = fetch(`https://caribeagencia-backend.vercel.app/api/v1/customers/`, {
			method: "PUT",
			body: JSON.stringify(customer),
			headers: {
				"Content-Type": "application/json",
			},
		});
		return res.json();
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

const deleteCustomer = async (id) => {
	try {
		const res = await fetch(
			`https://caribeagencia-backend.vercel.app/api/v1/customers/delete/${id}`,
			{
				method: "DELETE",
			},
		);
		console.log(res, "response");
		return res.json();
	} catch (err) {
		console.log(err);
	}
};

const createCustomer = async (newCustomer) => {
	const res = await fetch("https://caribeagencia-backend.vercel.app/api/v1/customers", {
		method: "POST",
		body: JSON.stringify(newCustomer),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (res.ok) return await res.json();

	throw await res.json();
};

export const useFetchCustomers = () => {
	return useQuery(["fetchCustomers"], () => getCustomers());
};

export const useCreateCustomer = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (newCustomer) => createCustomer(newCustomer),
		onSuccess: () => queryClient.invalidateQueries(["fetchCustomers"]),
	});
};

export const useDeleteCustomer = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id) => deleteCustomer(id),
		onSuccess: () => queryClient.invalidateQueries(["fetchCustomers"]),
	});
};

"use client";
import { useState } from "react";
import { CustomersTable } from "@/Components/DashboardComponents/Customers/CustomersTable";
import SlideOver from "@/Components/DashboardComponents/Customers/SlideOver";
import { useFetchCustomers } from "@/Hooks/Customers/useCustomers";
import CustomerForm from "@/Components/DashboardComponents/Customers/CustomerForm";

const CustomersPage = () => {
	const [open, setOpen] = useState(false);
	const { data: customers, isLoading, isError } = useFetchCustomers();
	const [selectedCustomer, setSelectedCustomer] = useState(null);

	const handleCreateNewCustomer = () => {
		setSelectedCustomer({});
		setOpen(true);
	};
	const handleEditSelectedCustomer = (customer) => {
		setSelectedCustomer(customer);
		setOpen(true);
	};
	console.log(selectedCustomer);
	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="col-span-9 py-2 relative">
			<div className="flex flex-row justify-between">
				<h1>Customers</h1>
				<button
					onClick={() => handleCreateNewCustomer(true)}
					className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					Add Customer
				</button>
			</div>
			<CustomersTable
				customers={customers ? customers : []}
				handleEditSelectedCustomer={handleEditSelectedCustomer}
			/>
			<SlideOver open={open} setOpen={setOpen} selectedCustomer={selectedCustomer}>
				<CustomerForm setIsOpen={setOpen} />
			</SlideOver>
			<p>selected: {selectedCustomer?.firstName}</p>
		</div>
	);
};
export default CustomersPage;

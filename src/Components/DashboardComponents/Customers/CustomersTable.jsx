import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdCircle, MdDelete, MdEdit } from "react-icons/md";

export const CustomersTable = ({ customers, handleEditSelectedCustomer }) => {
	const queryClient = useQueryClient();
	const mutationDelete = useMutation({
		mutationFn: (id) => {
			return fetch(`https://caribeagencia-backend.vercel.app/api/v1/customers/delete/${id}`, {
				method: "DELETE",
			});
		},
		onSuccess: () => queryClient.invalidateQueries(["fetchCustomers"]),
	});
	return (
		<div className=" grid py-2  min-w-full ">
			<div className="overflow-y-auto max-h-screen ">
				<table className=" text-left min-w-full ">
					<thead className="border-b bg-gray-50">
						<tr>
							<th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4">
								ID
							</th>
							<th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4">
								FullName
							</th>
							<th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4">
								Email
							</th>

							<th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4">
								Mobile
							</th>
							<th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4">
								Phone
							</th>
							<th scope="col" className="text-xs font-medium text-gray-900 px-6 py-4">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{customers?.map((customer) => (
							<tr key={customer.id} className="bg-white border-b">
								<td className=" py-4 whitespace-nowrap text-xs font-medium text-gray-900 ">
									<span className="hover:border  rounded-lg cursor-pointer  p-2 ">
										<i className="fa fa-file mx-2 text-gray-500"></i>
										{customer.id}
									</span>
								</td>
								<td className="text-xs  text-gray-900  px-6   py-4 whitespace-nowrap">
									{customer.firstName + " " + customer.lastName}
								</td>
								<td className="text-xs text-gray-900   mpx-6   py-4 whitespace-nowrap">
									<span className="bg-green-100 p-2 rounded-lg">{customer.email}</span>
								</td>
								<td className="text-xs  text-gray-900  px-6   py-4 whitespace-nowrap">
									{customer.mobile}
								</td>
								<td className="text-xs  text-gray-900  px-6   py-4 whitespace-nowrap">
									{customer.phone}
								</td>

								<td className="flex flex-row space-x-2 text-sm  text-gray-900  px-6   py-4 whitespace-nowrap">
									<button
										onClick={() => handleEditSelectedCustomer(customer)}
										className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
									>
										<MdEdit className="w-4 h-4  " />
									</button>
									<button
										onClick={() => mutationDelete.mutate(customer.id)}
										className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
									>
										<MdDelete className="w-4 h-4 " />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

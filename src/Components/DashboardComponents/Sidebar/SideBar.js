import { DocumentIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { MdShoppingCartCheckout } from "react-icons/md";

export const Sidebar = () => {
	return (
		<div className="col-span-3 ">
			<nav className="border-r pr-4 items-center  min-h-screen">
				<ul role="list" className="ls uh ym aaq">
					<li>
						<ul role="list" className="py-2 flex flex-col space-y-2">
							<li>
								<Link
									href="/dashboard"
									className="flex flex-row  px-4 font-medium bg-gray-50 rounded-lg  items-center  h-10 hover:bg-gray-100"
								>
									<HomeIcon className="h-6 w-6 mr-2" />
									Dashboard
								</Link>
							</li>
							<li>
								<Link
									href="/dashboard/invoices"
									className="flex flex-row  px-4 font-medium  rounded-lg  items-center  h-10 hover:bg-gray-100"
								>
									<DocumentIcon className="h-6 w-6 mr-2" />
									Invoices
								</Link>
							</li>
							<li>
								<Link
									href="/dashboard/products"
									className="flex flex-row  px-4 font-medium  rounded-lg  items-center  h-10 hover:bg-gray-100"
								>
									<MdShoppingCartCheckout className="h-6 w-6 mr-2" />
									Products
								</Link>
							</li>

							<li>
								<Link
									href="/dashboard/customers"
									className="flex flex-row  px-4 font-medium  rounded-lg  items-center  h-10 hover:bg-gray-100"
								>
									<UserGroupIcon className="h-6 w-6 mr-2" />
									Customers
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
};

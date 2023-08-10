import ProductsList from "@/Components/Products/ProductsList";
import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Products() {
	return (
		<div className="grid grid-flow-col   grid-cols-12 mt-10">
			<aside className="hidden lg:block max-w-64 border-r border-slate-200 p-4 col-span-2 ">
				<nav className="">
					<ul className="flex flex-col text-sm space-y-2">
						<li>
							<a href="#">All</a>
						</li>
						<li>
							<a href="#">Electronics</a>
						</li>
						<li>
							<a href="#">Clothing</a>
						</li>
						<li>
							<a href="#">Furniture</a>
						</li>
						<li>
							<a href="#">Books</a>
						</li>
					</ul>
				</nav>
			</aside>
			<div className="w-full col-span-10">
				<div className=" flex flex-col lg:flex-row items-center text-sm justify-between border-b border-slate-200 p-4">
					<div className="hidden lg:block">Filter Section</div>
					<div className="relative">
						<MagnifyingGlassIcon className="absolute z-10 top-2 left-2 w-5 h-5 text-slate-300" />
						<input
							className=" text-sm border-slate-200 focus:border-1  rounded-lg mx-auto min-w-64  pl-10"
							type="search"
							placeholder="Search"
						></input>
					</div>
				</div>
				<ProductsList />
			</div>
		</div>
	);
}

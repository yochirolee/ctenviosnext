import CategoriesSelect from "@/Components/Categories/CategoriesSelect";
import ProductsList from "@/Components/Products/ProductsList";
import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Products() {
	return (
		<div className="grid grid-flow-col   mt-10">
			<div className="w-full col-span-10">
				<div className=" flex w-full  flex-col-reverse  lg:flex-row items-center text-sm justify-between border-b border-slate-200 p-4">
					<div className=" lg:block">
						<CategoriesSelect />
					</div>
					<div className="relative  w-1/3">
						<MagnifyingGlassIcon className="absolute z-10 top-2 left-2 w-5 h-5 text-slate-300" />
						<input
							className=" text-sm border-slate-200 focus:border-1  rounded-lg mx-auto  w-full  pl-10"
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

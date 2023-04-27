import {
	ArchiveBoxIcon,
	CheckIcon,
	DocumentTextIcon,
	EyeIcon,
	HeartIcon,
	HomeIcon,
	TruckIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";
import { React } from "react";
export const TrackingCard = () => {
	return (
		<div className="relative  z-10 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl  lg:flex-none">
			<div className="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
				<div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
			</div>
			<div className="relative flex flex-col lg:flex-row items-center gap-6 bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
				<div>
					<div className="flex items-center justify-between">
						<h3 className="text-base font-semibold text-sky-500">No. Factura</h3>
						<a
							className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-slate-900 text-white hover:bg-slate-700"
							href="/"
						>
							<span className="flex items-center gap-2">
								<DocumentTextIcon className="h-6 w-6" />
								<span aria-hidden="true">6567</span>
							</span>
						</a>
					</div>
					<div className="mt-4 flex items-center">
						<p className="text-[1.5rem] leading-none text-slate-900">
							<span className="font-bold">CTE234332343</span>
						</p>
						<p className="ml-3 space-x-1 text-sm">
							<span className="font-semibold text-slate-900">HBL</span>
						</p>
					</div>
					<span className="text-slate-500 mt-4">Miscelaneas</span>
				</div>
				<ul class=" space-y-8 border-l border-slate-900/10 pl-4 text-sm leading-6 text-slate-700">
					<li class="flex items-center">
						<DocumentTextIcon className="w-6 h-6 text-[#0EA5E9]" />
						<p class="ml-5">
							<strong class="font-semibold text-slate-900">Facturado</strong> 04/17/2023
						</p>
					</li>
					<li class="flex items-center">
						<HomeIcon className="w-6 h-6 text-[#0EA5E9]" />
						<p class="ml-5">
							<strong class="font-semibold text-slate-900">En Almacen</strong> 04/17/2023
						</p>
					</li>
					<li class="flex items-center">
						<EyeIcon className="w-6 h-6 text-[#0EA5E9]" />
						<p class="ml-5">
							<strong class="font-semibold text-slate-900">Puerto del Mariel</strong> 04/17/2023
						</p>
					</li>
					<li class="flex items-center">
						<EyeIcon className="w-6 h-6 text-[#0EA5E9]" />
						<p class="ml-5">
							<strong class="font-semibold text-slate-900">Aduana Cuba</strong> 04/17/2023
						</p>
					</li>
					<li class="flex items-center">
						<EyeIcon className="w-6 h-6 text-[#0EA5E9]" />
						<p class="ml-5">
							<strong class="font-semibold text-slate-900">Listo para Traslado</strong> 04/17/2023
						</p>
					</li>
					<li class="flex items-center">
						<TruckIcon className="w-6 h-6 text-[#0EA5E9]" />
						<p class="ml-5">
							<strong class="font-semibold text-slate-900">En Traslado</strong> 04/17/2023
						</p>
					</li>
					<li class="flex items-center">
						<CheckIcon className="w-6 h-6 text-[#0EA5E9]" />
						<p class="ml-5">
							<strong class="font-semibold text-slate-900">Entregado</strong> 04/17/2023
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

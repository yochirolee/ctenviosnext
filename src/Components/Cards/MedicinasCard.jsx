import { ArchiveBoxIcon, HeartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { React } from "react";
import { MdMedication } from "react-icons/md";
export const MedicinasCard = () => {
	return (
		<div className="relative  z-10 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:w-/3 lg:flex-none">
			<div className="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
				<div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
			</div>
			<div className="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
				<div className="flex items-center justify-between">
					<h3 className="text-base font-semibold text-sky-500">Envie con Nosotros</h3>
					<a
						className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-green-600 text-white hover:bg-green-700"
						href="/"
					>
						<span>Medicinas</span>
					</a>
				</div>
				<div className="mt-3 flex items-center">
					<p className="text-[2.5rem] leading-none text-slate-900">
						$<span className="font-bold">2.75</span>
					</p>
					<p className="ml-3 space-x-1 text-sm">
						<span className="font-semibold text-slate-900">La libra de Medicinas</span>
					</p>
				</div>
				<p className="mt-6 text-sm leading-6 text-slate-600">
					Entregas en toda Cuba, No se paga nada en Cuba al recibirlo
				</p>
				<h4 className="sr-only">Medicinas</h4>
				<ul className="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700">
					<li className="flex items-center">
						<HeartIcon className="w-8 h-8 text-[#0EA5E9]" />
						<p className="ml-5">
							<strong className="font-semibold text-slate-900">$2,75 x Libra:</strong> de Medicinas
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

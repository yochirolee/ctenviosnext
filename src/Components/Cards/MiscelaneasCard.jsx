import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { React } from "react";
export const MiscelaneasCard = () => {
	return (
		<div className="relative  z-10 mx-2 rounded-lg shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:w-/3 lg:flex-none">
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
						className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-yellow-500 text-white hover:bg-yellow-700"
						href="/"
					>
						<span>Alimentos, Aseo y Medicinas</span>
					</a>
				</div>
				<div className="mt-3 flex items-center">
					<p className="text-[2.5rem] leading-none text-slate-900">
						<span className="font-semibold mx-1">6.60</span>lbs
					</p>
					<p className="ml-3 space-x-1 text-sm">
						<span className="font-semibold text-slate-900">Peso minimo a enviar</span>
					</p>
				</div>
				<p className="mt-6 text-sm leading-6 text-slate-600">
					Entregas en toda Cuba, No se paga nada en Cuba al recibirlo
				</p>
				<h4 className="sr-only">Miscelaneas</h4>
				<ul className="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700">
					<li className="flex items-center">
						<ArchiveBoxIcon className="w-8 h-8 text-[#0EA5E9]" />
						<p className="ml-5">
							<strong className="font-semibold text-slate-900">Por solo $16,00:</strong> Caja de
							Alimentos, Aseo y Medicinas 6.6 Lbs
						</p>
					</li>
					<li className="flex items-center">
						<ArchiveBoxIcon className="w-8 h-8 text-[#0EA5E9]" />
						<p className="ml-5">
							<strong className="font-semibold text-slate-900">Por solo $25,00:</strong> Caja de
							Alimentos, Aseo y Medicinas 11.00 Lbs
						</p>
					</li>
					<li className="flex items-center">
						<ArchiveBoxIcon className="w-8 h-8 text-[#0EA5E9]" />
						<p className="ml-5">
							<strong className="font-semibold text-slate-900">Por solo $49,00:</strong> Caja de
							Alimentos, Aseo y Medicinas 22.00 Lbs
						</p>
					</li>
					<li className="flex items-center">
						<ArchiveBoxIcon className="w-8 h-8 text-[#0EA5E9]" />
						<p className="ml-5">
							<strong className="font-semibold text-slate-900">Por solo $92,00:</strong> Caja de
							Alimentos, Aseo y Medicinas 44.00 Lbs
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

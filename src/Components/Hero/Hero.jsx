import { React } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";
import { ShadowBg1, ShadowBg2 } from "../Ui/ShadowBg1";
import { HeroRight } from "./HeroRight";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const Hero = () => {
	return (
		<>
			<ShadowBg1 />

			<div className="grid  lg:grid-flow-col lg:grid-cols-2 gap-20  items-center  mx-auto container   py-32  ">
				<div className=" mx-auto  text-center  ">
					<h1 class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
						Caribe Travel Express
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Empresa de logística internacional. Envíos de cargas marítimas y aéreas a toda Cuba, con
						mas de 20 años de experiencia en el sector
					</p>
					<div className="hidden mt-10 sm:mb-8 sm:flex sm:justify-center">
						<div className="relative flex gap-2 rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
							Estamos ubicados en 10230 NW 80th Ave. Hialeah Gardens .
							<a href="#" className="font-semibold text-indigo-600">
								<span className="absolute inset-0" aria-hidden="true" />

								<span aria-hidden="true">
									<MapPinIcon className="h-6 w-6" />
								</span>
							</a>
						</div>
					</div>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="flex  items-center   rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
						>
							<MdOutlineWhatsapp className="h-auto w-6 mx-2" />
							Contactanos
						</a>

						<Link href="/tracking" className="text-sm font-semibold leading-6 text-gray-900">
							Tracking de su Envio<span aria-hidden="true"> →</span>
						</Link>
					</div>
				</div>
				<HeroRight />
			</div>
			<ShadowBg2 />
		</>
	);
};

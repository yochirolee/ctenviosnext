"use client";
import { React, useState } from "react";
import { ShadowBg1, ShadowBg2 } from "../Ui/ShadowBg1";
import { HeroRight } from "./HeroRight";
import { EyeIcon, MagnifyingGlassIcon, MapIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { MdPinDrop } from "react-icons/md";
import { TrackingDetails } from "../TrackingDetails/TrackingDetails";

export const HeroTracking = () => {
	const [searchTerm, setSearchTerm] = useState(null);
	const [isSearching, setIsSearching] = useState(false);
	const [result, setResult] = useState(true);

	return (
		<div className="max-w-7xl mx-auto">
			<ShadowBg1 />
			<div className="grid  lg:grid-flow-col lg:grid-cols-2 gap-20  items-center  mx-auto container  py-14  lg:py-32  ">
				<div className=" mt-10 sm:mb-8 sm:flex sm:justify-center">
					<div className="max-w-xl lg:max-w-lg">
						<div className=" flex flex-col gap-4 items-center">
							<MapPinIcon
								className={`w-16 h-16 mx-auto text-blue-500 ${
									isSearching ? "animate-spin" : "animate-bounce"
								}`}
							/>
							<h2 className="mt-4 text-center text-2xl font-extrabold tracking-tight text-slate-900 xl:text-3xl xl:leading-[2.5rem]">
								Rastree su paquete o envio en tiempo real
							</h2>
						</div>

						<div className="mt-6 flex flex-col  md:flex-row  max-w-md gap-x-4">
							<label htmlFor="search" className="sr-only">
								Traking
							</label>
							<input
								id="search"
								name="search"
								type="text"
								autoComplete="text"
								onChange={(e) => setSearchTerm(e.target.value)}
								required
								className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-blue/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								placeholder="Buscar por Factura o HBL"
							/>
							<button
								type="submit"
								className=" inline-flex justify-center my-4 md:my-0 items-center gap-2 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								<MagnifyingGlassIcon className="h-5 w-5" />
								Buscar
							</button>
						</div>
						<p className="mt-4 text-md leading-8 text-gray-600">
							Nuestro sistema de tracking permite brindarle informacion sobre sus envios 24/7
							{searchTerm}
						</p>
					</div>
				</div>

				{result ? <TrackingDetails /> : <HeroRight />}
			</div>
			<ShadowBg2 />
		</div>
	);
};

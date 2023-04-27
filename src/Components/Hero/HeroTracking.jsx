"use client";
import { React, useState } from "react";
import { ShadowBg1, ShadowBg2 } from "../Ui/ShadowBg1";
import { HeroRight } from "./HeroRight";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const HeroTracking = () => {
	const [searchTerm, setSearchTerm] = useState(null);

	return (
		<div className="container">
			<ShadowBg1 />
			<div className="grid  lg:grid-flow-col lg:grid-cols-2 gap-20  items-center  mx-auto container  py-14  lg:py-32  ">
				<div className=" mx-auto  text-center  ">
					<div className=" mt-10 sm:mb-8 sm:flex sm:justify-center">
						<div className="max-w-xl lg:max-w-lg">
							<h2 className="text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
								Rastree su Envio o Paquete.
							</h2>
							<p className="mt-4 text-lg leading-8 text-gray-600">
								Puede Conocer en todo momento el estado de su Envio
								{searchTerm}
							</p>
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
						</div>
					</div>
				</div>
				<HeroRight />
			</div>
			<ShadowBg2 />
		</div>
	);
};

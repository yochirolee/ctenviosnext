"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroRight = () => {
	return (
		<div className="relative mx-auto   px-4 sm:px-6 lg:px-8">
			<div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

			<div className="mx-auto max-w-2xl sm:py-10 lg:py-42 lg:max-w-none ">
				<div className="justify-center overflow-hidden lg:overflow-visible items-center grid grid-cols-2 lg:grid-cols-3  lg:gap-x-6 lg:space-y-0">
					<motion.div
						animate={{ x: [0, 100, 0] }}
						style={{ x: 0, rotate: -25 }}
						transition={{ ease: "easeOut", duration: 2 }}
						className="relative hidden lg:block lg:max-h-80   lg:w-44 md:h-60 md:w-48 h-48 w-48 -rotate-12  overflow-hidden  rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
					>
						<Image
							src="/slider4.webp"
							className="lg:block  object-center object-cover"
							height={300}
							width={300}
							alt="Envios a cuba"
						/>
					</motion.div>

					<div className="relative lg:max-h-80   lg:w-44 md:h-60 md:w-48 h-48 w-48 overflow-hidden  rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
						<Image
							src="/truck.webp"
							className="  object-cover object-center"
							height={200}
							width={200}
							alt="Track Entregas Cuba"
						/>
					</div>

					<motion.div
						animate={{ x: [0, 50, 0] }}
						style={{ x: 0, rotate: 25 }}
						transition={{ ease: "easeIn", duration: 4 }}
						className="relative  lg:max-h-80   lg:w-44  md:h-60 md:w-48 h-48 w-48 lg:rotate-12 overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 -translate-x-20"
					>
						<Image
							src="/happy_cuban.webp"
							className="lg:block overflow-hidden    object-cover object-center"
							height={200}
							width={200}
							alt="Familia Cubana, Envios"
						/>
					</motion.div>
				</div>
			</div>
			<div>
				<p className="text-center my-10  font-semibold text-lg">Hasta la Puerta de su Casa!</p>
				<div className="relative  px-6 md:p-0 ">
					<div className="group mx-auto flex  justify-center  items-center gap-2 rounded-full bg-white/25 px-3 py-2 text-sm text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] sm:flex md:ml-8 lg:hidden xl:flex">
						<span className="text-xs font-semibold mx-2 text-sky-600 ">Seguridad y Garantia</span>

						<span className="text-xs md:font-medium">
							<span className="md:hidden">Lideres en el Sector</span>
							<span className="hidden md:inline">Lideres en el Sector de Paqueteria a Cuba</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

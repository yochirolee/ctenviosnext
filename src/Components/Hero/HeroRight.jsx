"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroRight = () => {
	return (
		<div className="relative mx-auto hidden lg:block  px-4 sm:px-6 lg:px-8">
			<div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

			<div className="mx-auto max-w-2xl sm:py-10 lg:py-42 lg:max-w-none ">
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<Image
						src="/banner-envios-cuba.png"
						alt="Envios a Cuba Oferta de Mayo"
						width={500}
						height={400}
						loading="lazy"
						priority={false}
						quality={65}
					/>
				</motion.div>
			</div>
			<div>
				<div className="relative  px-6 md:p-0 ">
					<div className="group mx-auto flex  justify-center  items-center gap-2 rounded-full bg-white/25 px-3 py-2 text-sm text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] sm:flex md:ml-8 lg:hidden xl:flex">
						<span className="text-xs font-semibold mx-2 text-sky-600 ">Seguridad y Garantía</span>

						<span className="text-xs md:font-medium">
							<span className="md:hidden">Líderes en el Sector</span>
							<span className="hidden md:inline">Líderes en el Sector de Paquetería a Cuba</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

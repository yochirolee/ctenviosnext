import Link from "next/link";
import { React } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";
import { AnimatedShinyTextDemo } from "../Animated/animated-shiny-text";

export const HeroLeft = () => {
	return (
		<div className="mx-auto px-4 text-center">
			<h1 className="mt-0 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
				Su Agencia de Envíos a Cuba
			</h1>
			<h2 className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
				Somos una agencia de envíos a Cuba y el Caribe, especializada en envíos de cargas marítimas
				y aéreas, con más de 20 años de experiencia en el sector
			</h2>
			<AnimatedShinyTextDemo />
			<div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-6">
				<Link
					prefetch={true}
					href="https://api.whatsapp.com/send?phone=%2B17542778810"
					className="w-full sm:w-auto flex justify-center items-center rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
				>
					<MdOutlineWhatsapp className="h-5 w-5 sm:w-6 mx-2" />
					<span className="text-white">Contáctanos</span>
				</Link>

				<Link prefetch={true} href="/tracking" className="text-sm font-semibold leading-6 text-gray-900">
					Tracking de su Envío<span aria-hidden="true"> →</span>
				</Link>
			</div>
		</div>
	);
};

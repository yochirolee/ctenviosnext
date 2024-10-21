import Link from "next/link";
import { React } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";
import { AnimatedShinyTextDemo } from "../Animated/animated-shiny-text";

export const HeroLeft = () => {
	return (
		<div className=" mx-auto  px-4 text-center  ">
			<h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
				Envíos a toda Cuba
			</h1>
			<p className="mt-6 text-lg leading-8 text-gray-600">
				Somos una empresa de logística internacional, especializada en envíos de cargas marítimas y
				aéreas a toda Cuba, con más de 20 años de experiencia en el sector
			</p>
			<AnimatedShinyTextDemo />
			<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						href="https://api.whatsapp.com/send?phone=%2B17542778810&data=AWCHK2enYTDFDGMl_C4WA-bU40pq2QeXbNy1Sy7ChnJantSaLPPYdb9OC4HK7-TXb4PUCw98TQsnV2uXOr4AHR8w7oKLusK52IM_7hQJqn-TKg36Y5KSPvQKVYyehzFbmSiDmcw6C3U2V_h6L2GUxzYviilHWyCEetBiYEYg8xsJ5Bwf4XzAto8JhiDGWmfZdXuopzwfJzIS1WSmWMp9-_Vk9rfhD4IyFq-jtsLWgY3Zr3O3kjmG4eOBdWssT8hI_RtD5_pM10XEXowaTTyD_xuVKsQ8d62vxfbpRpJBWlj1XgU&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0gA2hkfBC9mgbWIaX9XRjAiFZdRwxPDIaH0Frad0oE4jUD1Ae2jteu4sA"
						className="flex  items-center   rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
					>
						<MdOutlineWhatsapp className="h-auto w-6 mx-2" />
						<span className="text-white">Contáctanos</span>
					</Link>

					<Link href="/tracking" className="text-sm font-semibold leading-6 text-gray-900">
						Tracking de su Envío<span aria-hidden="true"> →</span>
					</Link>
				</div>
			</div>
		);
	};

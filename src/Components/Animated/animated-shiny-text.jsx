import { cn } from "@/lib/utils";
import { ArrowRightCircleIcon, MapPinIcon } from "lucide-react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import Link from "next/link";

export async function AnimatedShinyTextDemo() {
	return (
		<div className="  relative  items-center justify-center">
			<div className={cn(" rounded-full border border-black/5 mt-6  ")}>
				<AnimatedShinyText className="inline-flex items-center justify-center text-[13px]  px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
					<span className="hidden md:inline-flex">Estamos ubicados en </span>
					<span className="font ml-1 semi-bold text-gray-800">
						10230 NW 80th Ave. Hialeah Gardens
					</span>
					<Link
						href="https://www.google.com/maps/place/CTEnvios.+Envios+a+Cuba/@25.8675816,-80.3278302,19z/data=!3m1!4b1!4m14!1m7!3m6!1s0x88d9bb702273d979:0x35fce58bb3908f86!2sCTEnvios.+Envios+a+Cuba!8m2!3d25.8675804!4d-80.3271865!16s%2Fg%2F11kjzkr9zf!3m5!1s0x88d9bb702273d979:0x35fce58bb3908f86!8m2!3d25.8675804!4d-80.3271865!16s%2Fg%2F11kjzkr9zf?hl=es-419"
						target="_blank"
						rel="noopener noreferrer"
						className="font-semibold text-indigo-600"
						aria-label="Ver ubicación en Google Maps"
					>
						<span className="absolute inset-0" aria-hidden="true" />
						<span aria-hidden="true">
							<MapPinIcon className="h-6 w-6" />
						</span>
						<span className="sr-only">Ver en Google Maps</span>
					</Link>
				</AnimatedShinyText>
			</div>
		</div>
	);
}

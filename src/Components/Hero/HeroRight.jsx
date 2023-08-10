import Image from "next/image";

export const HeroRight = () => {
	return (
		<div className="relative mx-auto  px-4 sm:px-6 lg:px-8">
			<div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

			<div className="mx-auto max-w-2xl sm:py-10 lg:py-42 lg:max-w-none ">
				<div className="justify-center items-center grid grid-cols-2 lg:grid-cols-3  lg:gap-x-6 lg:space-y-0">
					<div className="relative hidden lg:block lg:max-h-80   lg:w-44 md:h-60 md:w-48 h-48 w-48 -rotate-12  overflow-hidden  rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
						<Image
							src="/slider4.jpg"
							className="lg:block h-full w-full object-cover object-center"
							height={500}
							width={500}
							alt="Envios a cuba"
						/>
					</div>

					<div className="relative lg:max-h-80   lg:w-44 md:h-60 md:w-48 h-48 w-48 overflow-hidden  rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
						<Image
							src="/truck.png"
							className="lg:block h-full w-full object-cover object-center"
							height={200}
							width={200}
							alt="Track Entregas Cuba"
						/>
					</div>

					<div className="relative  lg:max-h-80   lg:w-44  md:h-60 md:w-48 h-48 w-48 rotate-12 overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
						<Image
							src="/happy_cuban.png"
							className="lg:block h-full w-full object-cover object-center"
							fill
							alt="Familia Cubana, Envios"
						/>
					</div>
				</div>
			</div>
			<div>
				<p className="text-center my-4 font-semibold text-lg">Hasta la Puerta de su Casa!</p>
			</div>
		</div>
	);
};

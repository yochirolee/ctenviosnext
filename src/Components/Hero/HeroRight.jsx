import { React } from "react";

export const HeroRight = () => {
	return (
		<div className="relative mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

			<div className="mx-auto max-w-2xl sm:py-24 lg:py-42 lg:max-w-none ">
				<div className="justify-center items-center lg:grid lg:grid-cols-3  lg:gap-x-6 lg:space-y-0">
					<div className="relative max-h-80 -rotate-6 w-full overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
						<img src="slider4.jpg" className="h-full w-full   object-cover object-center" />
					</div>

					<div className="relative h-80 w-full overflow-hidden shadow-inner rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
						<img src="truck.png" className="h-full w-full object-cover object-center" />
					</div>

					<div className="relative  h-42 rotate-12  w-full overflow-hidden rounded-lg  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
						<img src="happy_cuban.png" className="h-full w-full object-cover object-center" />
					</div>
					
				</div>
			</div>
		</div>
	);
};

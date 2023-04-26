import { React } from "react";
export const TrackingDetails = () => {
	return (
		<>
			<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
				<img
					src="/img/beams.jpg"
					alt=""
					className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
					width="1308"
				/>
				<div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
				<div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
					<div className="mx-auto max-w-md">
						<div className="flex items-center justify-between space-x-10">
							<h2 className="rounded-md bg-blue-500 p-2 text-white">Caribe Travel Express</h2>
						</div>
						<div className="divide-y divide-gray-300/50 text-sm">
							<div className="space-y-6 py-8 text-base leading-7 text-gray-600">
								<div className="flex justify-between space-x-3 text-sm">
									<p>Factura:</p>
									<p className="font-semibold text-blue-500">8192</p>
								</div>
								<div className="flex justify-between space-x-3 text-sm">
									<p>HBL:</p>
									<p className="font-semibold text-gray-500">CTE34072350892</p>
								</div>
								<div className="flex justify-between space-x-3 border-b border-dashed pb-6">
									<p className="text-sm">Description:</p>
									<p className="text-sm">Barra de Cardan de Carro asdfasdfasdf asdfasdfasdfasdf</p>
								</div>

								<ul className="space-y-4">
									<li className="flex items-center justify-between">
										<div className="flex items-center">
											<svg
												className="h-6 w-6 flex-none fill-sky-100 stroke-green-500 stroke-2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<circle cx="12" cy="12" r="11" />
												<path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
											</svg>
											<p className="ml-4">En Puerto del Mariel</p>
										</div>
										<date className="font-sans text-sm text-gray-400">April 3, 2023</date>
									</li>
									<span className="ml-3 border-l"></span>
									<li className="flex items-center justify-between">
										<div className="flex items-center">
											<svg
												className="h-6 w-6 flex-none fill-sky-100 stroke-green-500 stroke-2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<circle cx="12" cy="12" r="11" />
												<path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
											</svg>
											<p className="ml-4">En Aduana Cuba</p>
										</div>
										<date className="font-sans text-sm text-gray-400">April 3, 2023</date>
									</li>
									<span className="ml-3 border-l"></span>
									<li className="flex items-center">
										<svg
											className="h-6 w-6 flex-none fill-sky-100 stroke-gray-500 stroke-2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<circle cx="12" cy="12" r="11" />
											<path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
										</svg>
										<p className="ml-4">Code completion with instant preview</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

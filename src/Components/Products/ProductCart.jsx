"use client";
import { React } from "react";
import { useCartStore } from "@/Store/useCartStore";

import { CheckCircleIcon, CheckIcon, ShoppingBagIcon, StarIcon } from "@heroicons/react/24/outline";

export const ProductCart = ({ product }) => {
	const [addToCart] = useCartStore((state) => [state.addToCart]);

	return (
		<div className="grid   min-w-72 h-auto grid-cols-1 ">
			<img
				src={product.imageSrc}
				alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
				className="rounded-lg  h-64 w-64 shrink-0 p-4 mx-auto"
			/>
			<div className="flex flex-col gap-4  my-2 py-2  px-4 backdrop-blur-sm ">
				<div className="flex flex-col justify-start  gap-2">
					<h2 className=" text-clip text-slate-500">{product.name}</h2>
					<div className="inline-flex items-center justify-between">
						<p className="text-md ">${product.price} usd</p>
						<a href="#" className="font-light inline-flex gap-1 text-[11px] items-center ">
							<CheckCircleIcon className="h-4 w-4 text-green-600" aria-hidden="true" />
							Envio Incluido
						</a>
					</div>
				</div>
				<div className="flex border-t border-dashed p-2  gap-2 items-center justify-center">
					<div className="inline-flex">
						<StarIcon className="h-5 w-5 text-yellow-500" />
						<StarIcon className="h-5 w-5 text-yellow-500" />
						<StarIcon className="h-5 w-5 text-yellow-500" />
						<StarIcon className="h-5 w-5 text-yellow-500" />
						<StarIcon className="h-5 w-5 text-yellow-500" />
					</div>
					<p className="text-slate-400 text-sm">45</p>
				</div>

				<button
					onClick={() => addToCart(product)}
					className="flex justify-center w-full  bg-blue-500 ring-1  text-sm ring-blue-500  group hover:bg-blue-500/80   text-white gap-2 items-center   rounded-lg p-2 border"
				>
					Agregar al carrito
					<ShoppingBagIcon className="h-5 w-5" />
				</button>
			</div>
		</div>
		/* <div
			key={product.id}
			className="relative  z-10 p-4  shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:w-/3 lg:flex-none"
		>
			{/* <div className="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
				<div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
			</div> 
			<div className="relative bg-white  py-4 sm:rounded-3xl sm:px-10 lg:p-4">
				<img
					src={product.imageSrc}
					alt={product.imageAlt}
					className="h-full w-full  object-scale-down object-center group-hover:opacity-75"
				/>

				<div className="flex justify-between py-4 items-center">
					<div className="mt-3 flex  flex-col items-start">
						<div className="flex flex-row  w-full items-center justify-between">
							<div>
								<p className="text-[2.5rem] leading-none text-slate-900">
									$<span className="font-bold">{product.price}</span>
								</p>
								<p className="ml-3 my-2 space-x-1 text-sm">
									<span className="font-semibold text-slate-900">{product.name}</span>
								</p>
							</div>

							<div>
								<p className="ml-3 space-x-1 text-sm  px-2 rounded-lg bg-yellow-500/90 text-white">
									<span className="font-light mx-auto text-center flex">Envio Gratis</span>
								</p>
							</div>
						</div>

						<p className="mt-6 text-sm leading-6 text-slate-600">
							Entregas en toda Cuba, No se paga nada en Cuba al recibirlo
						</p>
					</div>
				</div>

				<div className="flex flex-row justify-end  border-t border-slate-900/10 py-4 text-sm leading-6 text-slate-700">
					<button
						className=" inline-flex  gap-2 items-center  px-2 py-1.5 font-light   rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						onClick={() => handleAddToCart(product)}
					>
						<ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
						Add to Cart
					</button>
				</div>
			</div>
		</div> */
	);
};
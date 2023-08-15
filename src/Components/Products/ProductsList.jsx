import { React } from "react";
import { ProductCart } from "./ProductCart";

const products = [
	{
		id: 1,
		name: "Batidora",
		href: "#",
		price: "48",
		imageSrc: "/batidora.webp",
		imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
	},
	{
		id: 2,
		name: "Generador Electrico",
		href: "#",
		price: "35",
		imageSrc: "/generador.webp",
		imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
	},
	{
		id: 3,
		name: "TV Onn 65 Pulgadas",
		href: "#",
		price: "89",
		imageSrc: "/tv-remove.png",
		imageAlt: "Person using a pen to cross a task off a productivity paper card.",
	},
	{
		id: 4,
		name: "InstantPop Multifuncion",
		href: "#",
		price: "35",
		imageSrc: "/olla.png",
		imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
	},
	{
		id: 5,
		name: "Batidora",
		href: "#",
		price: "48",
		imageSrc: "/batidora.webp",
		imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
	},
	{
		id: 6,
		name: "Generador Electrico",
		href: "#",
		price: "35",
		imageSrc: "/generador.webp",
		imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
	},
	{
		id: 7,
		name: "TV Onn 65 Pulgadas",
		href: "#",
		price: "89",
		imageSrc: "/tv-remove.png",
		imageAlt: "Person using a pen to cross a task off a productivity paper card.",
	},
	{
		id: 8,
		name: "InstantPop Multifuncion",
		href: "#",
		price: "35",
		imageSrc: "/olla.png",
		imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
	},

	// More products...
];

export default function ProductsList({ showHeader = false }) {
	return (
		<div className="bg-white">
			{showHeader ? (
				<div>
					<h2 className="text-base font-semibold leading-7 text-blue-500">
						Nuestros Productos Destacados
					</h2>
					<p className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 xl:text-3xl xl:leading-[2.5rem]">
						Compra Online
					</p>
				</div>
			) : null}
			<div className="mx-auto max-w-2xl    sm:px-6 sm:py-10 lg:max-w-7xl lg:px-4">
				<h2 className="sr-only">Products</h2>

				<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-4 lg:gap-x-8 gap-y-16 px-4  sm:px-6  lg:max-w-7xl sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lg:px-8">
					{products.map((product) => (
						<ProductCart product={product} key={product.id} />
					))}
				</div>
			</div>
		</div>
	);
}

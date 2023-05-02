import Image from "next/image";
import { React } from "react";

const products = [
	{
		id: 1,
		name: "Earthen Bottle",
		href: "#",
		price: "$48",
		imageSrc: "/batidora.webp",
		imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
	},
	{
		id: 2,
		name: "Nomad Tumbler",
		href: "#",
		price: "$35",
		imageSrc: "/generador.webp",
		imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
	},
	{
		id: 3,
		name: "Focus Paper Refill",
		href: "#",
		price: "$89",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
		imageAlt: "Person using a pen to cross a task off a productivity paper card.",
	},
	{
		id: 4,
		name: "Machined Mechanical Pencil",
		href: "#",
		price: "$35",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
		imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
	},
	{
		id: 5,
		name: "Machined Mechanical Pencil",
		href: "#",
		price: "$35",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
		imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
	},
	{
		id: 6,
		name: "Machined Mechanical Pencil",
		href: "#",
		price: "$35",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
		imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
	},
	{
		id: 7,
		name: "Machined Mechanical Pencil",
		href: "#",
		price: "$35",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
		imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
	},
	{
		id: 8,
		name: "Machined Mechanical Pencil",
		href: "#",
		price: "$35",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
		imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
	},
	// More products...
];

export default function ProductsList() {
	return (
		<div className="bg-white">
			<div className="lg:col-span-4">
				<h2 className="text-base font-semibold leading-7 text-blue-500">Nuestros Productos</h2>
				<p className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 xl:text-3xl xl:leading-[2.5rem]">
					Compra Online y envia a Cuba
				</p>
			</div>
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<div key={product.id}>
							<a href={product.href} className="group">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
									<img
										src={product.imageSrc}
										alt={product.imageAlt}
										className="h-full w-full object-cover object-center group-hover:opacity-75"
									/>
								</div>
								<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
								<p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
							</a>
							<button
								className="snipcart-add-item"
								data-item-id={product.id}
								data-item-image={product.imageSrc}
								data-item-name={product.name}
								data-item-url="/"
								data-item-price={product.price}
							>
								Add to Cart
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

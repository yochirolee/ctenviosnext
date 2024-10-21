import * as React from "react";
import Image from "next/image";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/Components/ui/button";
import { CheckIcon } from "lucide-react";
import { Badge } from "@/Components/ui/badge";

const products = [
	{ name: "Moto Tanke E1", price: 1179.99, image: "/bikes/e1/e1-1.png?height=150&width=150" },
	{ name: "Moto Big-T E2", price: 1379.99, image: "/bikes/e2/e2-1.png?height=150&width=150" },
	{ name: "Moto Tanke E3", price: 1179.99, image: "/bikes/e3/e3-1.png?height=150&width=150" },
	{ name: "Moto Tanke E4", price: 1179.99, image: "/bikes/e4/e4-1.png?height=150&width=150" },
	{ name: "Moto Tanke E5", price: 1179.99, image: "/bikes/e5/e5-1.png?height=150&width=150" },
];

// Add this function at the top level of your component
const createWhatsAppLink = (product) => {
	const phoneNumber = "17542778810"; // Replace with your actual WhatsApp number
	const message = encodeURIComponent(`Pre-reservar ${product.name}`);
	return `https://wa.me/${phoneNumber}?text=${message}`;
};

export default function FeaturedProducts() {
	return (
		<div className="py-20 max-w-5xl sm:py-24 lg:py-32 lg:mx-auto mx-4">
			<div className="mx-auto p-10 max-w-2xl text-center lg:max-w-4xl">
				<h2 className="text-base font-semibold leading-7 text-sky-600">Reserve desde ya</h2>
				<p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
					Ya puedes pre-reservar tu moto de gasolina desde Ahora!!!
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
				{products.map((product, productIndex) => (
					<Card key={productIndex} className="overflow-hidden shadow-md">
						<Image
							src={product.image}
							alt={product.name}
							width={150}
							height={150}
							className="w-full h-auto p-6 object-contain  bg-gray-50 mb-2 rounded-t-md"
						/>
						<CardContent className="grid p-4 gap-4 ">
							<div className="inline-flex justify-between items-center">
								<h3 className="text-sm font-semibold truncate">{product.name}</h3>
								<span className="text-base font-bold text-primary">
									${product.price.toFixed(2)}
								</span>
							</div>
							<div className="grid gap-2 items-center">
								<div className="flex items-end justify-end">
									<Badge variant="outline">Nuevo</Badge>
								</div>
								<ul className="gap-4 flex flex-col text-sm">
									<li className="flex gap-x-3">
										<CheckIcon aria-hidden="true" className="text-sky-600 h-6 w-5 flex-none" />
										Details
									</li>
									<li className="flex gap-x-3">
										<CheckIcon aria-hidden="true" className="text-sky-600 h-6 w-5 flex-none" />
										Details
									</li>
									<li className="flex gap-x-3">
										<CheckIcon aria-hidden="true" className="text-sky-600 h-6 w-5 flex-none" />
										Details
									</li>
								</ul>
							</div>
							<a href={createWhatsAppLink(product)} target="_blank" rel="noopener noreferrer">
								<Button className="w-full">Pre-Reservar</Button>
							</a>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}

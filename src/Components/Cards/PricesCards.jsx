import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
const tiers = [
	{
		name: "Envío Marítimo Precio Regular",
		id: "tier-hobby",
		href: "#",
		priceMonthly: "$1.99",
		description:
			"La opción ideal para enviar paquetes a Cuba con tarifas competitivas. Ahorra en envíos de gran volumen y peso con un servicio confiable y entrega en toda la isla.",
		features: [
			"Entregas puerta a puerta en toda Cuba",
			"Seguimiento en tiempo real de tu envío",
			"Atención al cliente 24/7 vía WhatsApp",
		],
		featured: false,
	},
	{
		name: "Oferta Martes Especial",
		id: "tier-enterprise",
		href: "#",
		priceMonthly: "$1.69",
		description:
			"Envía tus paquetes a Cuba por solo $1.69 la libra, todos los martes. Aprovecha esta tarifa especial para envíos a Cuba con entrega puerta a puerta en toda la isla",
		features: [
			"Tarifas exclusivas todos los martes",
			"Entregas rápidas y seguras en toda Cuba",
			"Atención personalizada 24/7 por WhatsApp",
		],
		featured: true,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function PriceCards() {
	return (
		<div className="relative isolate rounded-3xl  bg-white px-6 p pt-4 pb-12 lg:px-8">
			<div
				aria-hidden="true"
				className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
				/>
			</div>
			<div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
				<h2 className="text-base font-semibold leading-7 text-sky-600">Envíos a Cuba al Mejor Precio Garantizado</h2>
				<p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
				Ofrecemos el mejor precio del mercado para tus envíos a Cuba
				</p>
			</div>

			<div className="mx-auto mt-16 grid  max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
				{tiers
					.slice()
					.reverse()
					.map((tier, tierIdx) => (
						<div
							key={tier.id}
							className={classNames(
								tier.featured ? "relative bg-gray-900 shadow-2xl" : "bg-white/60 sm:mx-8 lg:mx-0",
								tier.featured
									? ""
									: tierIdx === 0
									? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
									: "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
								"rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10",
							)}
						>
							<h3
								id={tier.id}
								className={classNames(
									tier.featured ? "text-sky-400" : "text-sky-600",
									"text-base font-semibold leading-7",
								)}
							>
								{tier.name}
							</h3>
							{tier.featured && (
								<Image
									src="/envios_cuba_madres.png"
									alt="Envios a Cuba Oferta Martes"
									className="w-full mt-3 rounded-full object-cover"
									width={300}
									height={300}
									loading="lazy"
									priority={false}
									quality={60}
								/>
							)}
							<p className="mt-4 flex items-baseline gap-x-2">
								<span
									className={classNames(
										tier.featured ? "text-white" : "text-gray-900",
										"text-7xl font-bold  tracking-tight",
									)}
								>
									{tier.priceMonthly}
								</span>
								<span
									className={classNames(
										tier.featured ? "text-gray-400" : "text-gray-500",
										"text-base",
									)}
								>
									/lb
								</span>
							</p>
							<p
								className={classNames(
									tier.featured ? "text-gray-300" : "text-gray-600",
									"mt-6 text-base leading-7",
								)}
							>
								{tier.description}
							</p>
							<ul
								role="list"
								className={classNames(
									tier.featured ? "text-gray-300" : "text-gray-600",
									"mt-8 space-y-3 text-sm leading-6 sm:mt-10",
								)}
							>
								{tier.features.map((feature) => (
									<li key={feature} className="flex gap-x-3">
										<CheckIcon
											aria-hidden="true"
											className={classNames(
												tier.featured ? "text-sky-400" : "text-sky-600",
												"h-6 w-5 flex-none",
											)}
										/>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
			</div>
		</div>
	);
}

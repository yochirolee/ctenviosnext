"use client";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";
import { Clock, MapIcon, MapPinIcon, Package2 } from "lucide-react";
import { NeonGradientCard } from "../ui/neon-gradient-card";
import { Card, CardDescription, CardTitle } from "../ui/card";

const tiers = [
	{
		name: "Marítimo",
		id: "tier-hobby",
		href: "#",
		priceMonthly: "$1.99",
		description:
			"El precio y el plan perfecto para enviar a Cuba. Ahorra en los artículos de gran volumen y peso",
		features: [
			"Entregas en Todas las Provincias",
			"Sistema de Tracking en Tiempo Real",
			"Aseguramos sus envios",
			"Atencion al Cliente 24 horas  ",
		],
		featured: false,
	},
	/*  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  }, */
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Prices() {
	return (
		<div className="relative mx-auto    gap-8 max-w-lg flex flex-col-reverse  lg:flex-row items-center sm:mt-10 sm:gap-y-0 lg:max-w-7xl lg:gap-y-6">
			<div className="relative max-w-2xl z-10 lg:px-20 px-2 ">
				<BorderBeam size={250} duration={12} delay={9} colorFrom="#ec4899" colorTo="#6fa8dc"/>
				{tiers.map((tier, tierIdx) => (
						<motion.div
							key={tier.id}
							className={classNames(
								tier.featured ? "relative bg-gray-900 shadow-2xl" : "bg-white/60  md:mx-8 lg:mx-0",
								tier.featured
									? ""
									: tierIdx === 0
									? "rounded-3xl  lg:rounded-bl-3xl "
									: "  lg:rounded-3xl",
								"rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10",
							)}
						>
							<motion.h3
								id={tier.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className={classNames(
									tier.featured ? "text-[#0EA5E9]" : "text-[#0EA5E9]",
									"text-base font-semibold leading-7",
								)}
							>
								{tier.name}
							</motion.h3>

							<motion.p
								className=" relative mt-4 flex  justify-center items-baseline gap-x-2"
								initial={{ scale: 0.8 }}
								animate={{ scale: 1 }}
								transition={{ duration: 0.5, delay: 0.4 }}
							>
								<span
									className={classNames(
										tier.featured ? "text-white" : "text-gray-900",
										"text-7xl font-bold tracking-tight mx-auto",
									)}
								>
									{tier.priceMonthly}
									<span
										className={classNames(
											tier.featured ? "text-gray-400 " : "text-gray-500",
											"text-base",
										)}
									>
										lb
									</span>
								</span>
							</motion.p>

							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className={classNames(
									tier.featured ? "text-gray-300" : "text-gray-600",
									"mt-6 text-base leading-7",
								)}
							>
								{tier.description}
							</motion.p>

							<motion.ul
								className="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.6 }}
							>
								<motion.li
									className="flex items-center"
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.3, delay: 0.7 }}
								>
									<Package2 className="h-6 w-6 flex-shrink-0 text-[#0EA5E9]" />
									<p className="ml-5">
										<strong className="font-semibold text-slate-900">Rapidez y Seguridad:</strong>{" "}
										en cada uno de sus envios
									</p>
								</motion.li>
								<motion.li
									className="flex items-center"
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.3, delay: 0.8 }}
								>
									<MapPinIcon className="h-6 w-6 flex-shrink-0 text-[#0EA5E9]" />
									<p className="ml-5">
										<strong className="font-semibold text-slate-900">Tracking Incluido:</strong>{" "}
										Sistema de Tracking en tiempo real
									</p>
								</motion.li>
								<motion.li
									className="flex items-center"
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.3, delay: 0.9 }}
								>
									<Clock className="h-6 w-6 flex-shrink-0 text-[#0EA5E9]" />
									<div className="ml-5">
										<strong className="space-x-1 font-semibold text-slate-900">Horario:</strong>
										<p>
											Lun - Vie: <strong>9:00 AM - 6:00 PM</strong>
											<br />
											Sáb - Dom: <strong>10:00 AM - 4:00 PM</strong>
										</p>
									</div>
								</motion.li>
							</motion.ul>

							<div className="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700">
								<div className="flex rounded-lg p-3   border-slate-900/40 items-center">
									<strong className="flex font-semibold text-xl mx-auto text-center ">
										Entregas puerta a puerta en todo el país
									</strong>
								</div>
							</div>
						</motion.div>
					
				))}
			</div>
			<div className="mx-auto max-w-2xl text-center ">
				<h2 className="text-base font-semibold leading-7 text-sky-600">Nuestros Precios</h2>
				<p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
					El mejor Precio del Mercado
				</p>
				<NeonGradientCard>
					<Card className="bg-gray-900 my-4 p-4 rounded-lg text-white">
						<CardTitle>Abril de Descuentos</CardTitle>
						<CardDescription>
							En todos los productos, solo los martes
						</CardDescription>
					</Card>
				</NeonGradientCard>
			</div>
		</div>
	);
}

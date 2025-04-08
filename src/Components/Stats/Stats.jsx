import BlurFade from "../ui/blur-fade";
import NumberTicker from "../ui/number-ticker";
import Ripple from "../ui/ripple";

const stats = [
	{ id: 1, name: "Enviados en el 2024", description: "Contenedores", value: 85 },
	{ id: 2, name: "Entregados en el 2024", description: "Paquetes", value: 126000 },
	{ id: 3, name: "Nuevos en el 2024", description: "Clientes", value: 3402 },
];

export const Stats = () => {
	return (
		<div className=" relative">
			<div className="mx-auto max-w-2xl text-center lg:max-w-4xl mb-10">
				<h2 className="text-base font-semibold leading-7 text-sky-600">
					Paquetes Entregados y Clientes
				</h2>
				<p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
					Nuestros Resultados en el 2024
				</p>
			</div>
			<BlurFade delay={0.5 * 0.5} inView>
				<div className="relative grid items-center  md:grid-cols-3 my-10 md:my-0 h-[500px] w-full flex-col  overflow-hidden ">
					{stats.map((stat) => (
						<div key={stat.id} className="flex flex-col items-center lg:gap-10 ">
							<div className="text-xl leading-7 text-sky-600">{stat.description}</div>
							<div className="text-2xl leading-7 text-gray-600">{stat.name}</div>
							<div className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
								<NumberTicker value={stat.value} />
							</div>
						</div>
					))}

					<Ripple />
				</div>
			</BlurFade>
		</div>
	);
};

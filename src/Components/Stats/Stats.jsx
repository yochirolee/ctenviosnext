import BlurFade from "../Ui/blur-fade";
import Meteors from "../Ui/meteors";
import NumberTicker from "../Ui/number-ticker";
import Ripple from "../Ui/ripple";

const stats = [
	{ id: 1, name: "Enviados en el 2023", description: "Contenedores", value: 48 },
	{ id: 2, name: "Entregados en el 2023", description: "Paquetes", value: 60000 },
	{ id: 3, name: "Nuevos en el 2023", description: "Clientes", value: 2000 },
];

export const Stats = () => {
	return (
		<div className="sm:py-24 lg:py-32">
			<div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
				<h2 className="text-base font-semibold leading-7 text-sky-600">
					Paquetes Entregados y Clientes
				</h2>
				<p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
					Nuestros Resultados en el 2023
				</p>
			</div>
			<BlurFade delay={0.5 * 0.5} inView>
				<p className="mt-6 text-lg leading-8 text-gray-600"></p>
				<div className="relative flex md:grid md:grid-cols-3 h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
					{stats.map((stat) => (
						<div key={stat.id} className="mx-auto px-4 flex max-w-xs flex-col gap-y-4">
							<div className="text-xl leading-7 text-gray-600">{stat.description}</div>
							<div className="text-base leading-7 text-gray-600">{stat.name}</div>
							<div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
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

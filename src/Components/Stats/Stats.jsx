const stats = [
	{ id: 1, name: "Enviados en el 2023", value: "48 contenedores" },
	{ id: 2, name: "Entregados en el 2023", value: "+60 000 paquetes " },
	{ id: 3, name: "Clientes nuevos en el 2023", value: "+2,000" },
];

export const Stats = () => {
	return (
		<div className="bg-white  py-10 sm:py-32">
			<div className="mx-auto  max-w-7xl px-6 lg:px-8">
				<dl className=" grid grid-cols-1 lg:divide-x  gap-x-8 gap-y-16 text-center lg:grid-cols-3">
					{stats.map((stat) => (
						<div key={stat.id} className="mx-auto px-4 flex max-w-xs flex-col gap-y-4">
							<div className="text-base leading-7 text-gray-600">{stat.name}</div>
							<div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
								{stat.value}
							</div>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
};

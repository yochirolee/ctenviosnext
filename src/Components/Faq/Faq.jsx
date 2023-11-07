import { React } from "react";
export const Faq = () => {
	return (
		<div id='faq' className=" my-12 mx-4 pb-12  grid grid-cols-1 gap-x-14 gap-y-16  lg:grid-cols-12">
			<div className="lg:col-span-4">
				<h2 className="text-base font-semibold leading-7 text-blue-500">Preguntas Frecuentes</h2>
				<p className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 xl:text-3xl xl:leading-[2.5rem]">
					Todo lo que Necesita Saber y Mas...
				</p>
			</div>
			<div className="-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6">
				<section>
					<h3 className="text-sm font-semibold leading-7 text-slate-400">General</h3>
					<dl className="mt-2 divide-y divide-slate-100">
						<details className="group py-4 ">
							<summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 ">
								Que tiempo demora un Envio?
								<svg
									className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 12H6"></path>
									<path className="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div className="pb-6 pt-6">
								<div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										Generalmente nuestros envios demoran de
										<strong>30 - 45 dias laborables</strong>. Este tiempo depende tambien de la
										provincia a la que envie, siendo las provincias orientales las que mas tardamos
										en entregar.
									</p>
								</div>
							</div>
						</details>
						<details className="group py-4 ">
							<summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 ">
								Entregan a Domicilio?
								<svg
									className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 12H6"></path>
									<path className="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div className="pb-6 pt-6">
								<div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										<strong>Si</strong>. Todos sus envios son entregados en la puerta del
										destinatario en Cuba
									</p>
								</div>
							</div>
						</details>
						<details className="group py-4 ">
							<summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 ">
								Si envio Miscelaneas mi familia o destinatario debe pagar algo al recibirlas?
								<svg
									className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 12H6"></path>
									<path className="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div className="pb-6 pt-6">
								<div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										<strong>No</strong>. Todas las miscelaneas enviadas con Nuestra Agencia son
										libre de costo en Cuba. La persona que recibe no debe abonar nada
									</p>
								</div>
							</div>
						</details>
					</dl>
				</section>
				<section>
					<h3 className="text-sm font-semibold leading-7 text-slate-400">Aduana</h3>
					<dl className="mt-2 divide-y divide-slate-100">
						<details className="group py-4 ">
							<summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 ">
								Que es un Envio Regular?
								<svg
									className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 12H6"></path>
									<path className="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div className="pb-6 pt-6">
								<div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										Un envío regular se refiere a los bienes que se envían al país a través de los
										servicios regulares de transporte de mercancías, como navieras, aerolíneas o
										empresas de transporte terrestre.
									</p>
								</div>
							</div>
						</details>
						<details className="group py-4 ">
							<summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 ">
								Que es un ENA?
								<svg
									className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 12H6"></path>
									<path className="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div className="pb-6 pt-6">
								<div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										ENA o <strong>Equipaje no Acompañado</strong>. Se refiere a los bienes y efectos
										personales que llegan al territorio cubano en un momento diferente al del
										viajero que los importa, en un limite de tiempo de un año natural
									</p>
								</div>
							</div>
						</details>
						<details className="group py-4 ">
							<summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 ">
								Algunas disposiciones Aduanales de Interes.
								<svg
									className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 12H6"></path>
									<path className="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div className="pb-6 pt-6">
								<div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										Los bienes que ingresan al territorio cubano están sujetos a la revisión y
										control de las autoridades aduaneras. Los viajeros que ingresan a Cuba están
										sujetos a una serie de límites en la cantidad y valor de los bienes que pueden
										traer consigo. Los bienes que se exportan de Cuba también están sujetos a las
										regulaciones y procedimientos aduaneros, incluyendo la necesidad de obtener
										permisos y autorizaciones para la exportación de ciertos bienes. La ley aduanal
										cubana establece las sanciones aplicables en caso de infracciones aduaneras, que
										pueden incluir multas, confiscación de bienes y en algunos casos, incluso la
										privación de libertad.
									</p>
								</div>
							</div>
						</details>
					</dl>
				</section>
			</div>
		</div>
	);
};

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const faqSections = [
	{
		title: "Información General",
		faqs: [
			{
				title: "¿Qué tiempo demora un envío?",
				content:
					"Generalmente nuestros envíos demoran de 30 a 45 días laborables. Este tiempo depende también de la provincia a la que se envíe, siendo las provincias orientales las que más tardamos en entregar.",
				value: "general-1",
			},
			{
				title: "¿Cuál es el peso máximo permitido para un paquete?",
				content:
					"El peso máximo permitido para un paquete es de 30 kg. Si su envío supera este peso, deberá dividirlo en varios paquetes.",
				value: "general-2",
			},
		],
	},
	{
		title: "Restricciones y Seguridad",
		faqs: [
			{
				title: "¿Qué artículos están prohibidos para enviar?",
				content:
					"Está prohibido enviar artículos como drogas, armas, explosivos, materiales inflamables, animales vivos, dinero en efectivo y otros artículos ilegales o peligrosos. Por favor, consulte nuestra lista completa de artículos prohibidos antes de realizar su envío.",
				value: "security-1",
			},
			{
				title: "¿Ofrecen seguro para los envíos?",
				content:
					"Sí, ofrecemos opciones de seguro para sus envíos. El costo del seguro varía según el valor declarado del contenido del paquete. Recomendamos asegurar todos los envíos de alto valor para su tranquilidad.",
				value: "security-2",
			},
		],
	},
	{
		title: "Seguimiento y Resolución de Problemas",
		faqs: [
			{
				title: "¿Cómo puedo rastrear mi paquete?",
				content:
					"Puede rastrear su paquete utilizando el número de seguimiento proporcionado en el momento del envío. Ingrese este número en la sección de 'Rastreo' de nuestra página web o aplicación móvil para obtener actualizaciones sobre el estado de su envío.",
				value: "tracking-1",
			},
			{
				title: "¿Qué hago si mi paquete se pierde o se daña?",
				content:
					"En caso de pérdida o daño de su paquete, por favor contáctenos inmediatamente. Tenemos un proceso de reclamación que debe iniciarse dentro de los 15 días posteriores a la fecha estimada de entrega. Asegúrese de guardar todos los recibos y documentación relacionada con su envío.",
				value: "tracking-2",
			},
		],
	},
];

export default function Faq() {
	return (
		<div id="faq" className="py-20 mx-4 sm:py-24 lg:py-32 items-center  grid lg:grid-cols-2 gap-10">
			<div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
				<h2 className="text-base font-semibold leading-7 text-sky-600">Preguntas Frecuentes</h2>
				<p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
					Todo lo que debe Conocer..
				</p>
			</div>
			<div>
				{faqSections.map((section, sectionIndex) => (
					<div key={sectionIndex} className="mb-10">
						<h2 className=" cursor-pointer    text-base font-semibold leading-7 text-sky-700">
							{section.title}
						</h2>
						<Accordion type="single" collapsible>
							{section.faqs.map((faq, faqIndex) => (
								<AccordionItem key={faqIndex} value={faq.value}>
									<AccordionTrigger className="inline-flex text-left justify-between">
										{faq.title}
									</AccordionTrigger>
									<AccordionContent>{faq.content}</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				))}
			</div>
		</div>
	);
}

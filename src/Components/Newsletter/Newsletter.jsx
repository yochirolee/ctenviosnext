import { React } from "react";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function NewsLetter() {
	return (
		<div className="relative  sm:rounded-3xl isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
			<Image
				fill
				src="/ship.webp"
				alt="Ship Cuba Envios"
				className="lg:block object-center object-cover absolute  -z-10 inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
			></Image>

			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
					<div className="max-w-xl lg:max-w-lg">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Unete a Nuestra Gran Familia.
						</h2>
						<p className="mt-4 text-lg leading-8 text-white">
							Mantengase Informado de nuestras noticias y promociones.
						</p>
						<div className="mt-6 flex max-w-md gap-x-4">
							<label htmlFor="email-address" className="sr-only">
								Phone
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="min-w-0 flex-auto rounded-md border-0  px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								placeholder="Entre su Correo"
							/>
						</div>
						<div className="mt-6 flex max-w-md gap-x-4">
							<label htmlFor="email-address" className="sr-only">
								Phone Number
							</label>
							<input
								id="phone"
								name="phone"
								type="phone"
								autoComplete="phone"
								required
								className="min-w-0 flex-auto rounded-md border-0  px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								placeholder="Entre su Telefono"
							/>
						</div>
						<div className="flex items-center text-white gap-4 my-4">
							<input type="checkbox"></input>
							<span className="text-xs">
								Ud esta de acuerdo en recibir emails y mensajes de textos informativos y
								promocionales?
							</span>
						</div>
						<button
							type="submit"
							className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>
							Subscribe
						</button>
					</div>
					<dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
								<CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
							</div>
							<dt className="mt-4 font-semibold text-white">Promociones y Noticias</dt>
							<dd className="mt-2 leading-7 text-white/80">
								Mantengase al tanto de Nuestras Promociones, Eventos y Noticias
							</dd>
						</div>
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
								<HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
							</div>
							<dt className="mt-4 font-semibold text-white">No spam</dt>
							<dd className="mt-2 leading-7 text-white/80">
								CTEnvios se compromete a no realizar Spam e informarle solo lo importante.
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div
				className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
				aria-hidden="true"
			>
				<div
					className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#131518] to-[#6a6972] opacity-30"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
		</div>
	);
}

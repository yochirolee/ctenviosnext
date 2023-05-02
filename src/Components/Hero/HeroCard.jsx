import { ArchiveBoxIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { React } from "react";
import { MdAccountBox } from "react-icons/md";
export const HeroCard = ({ callout }) => {
	return (
		<div className="relative  z-10 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:w-/3 lg:flex-none">
			<div className="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
				<div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
				<div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
			</div>
			<div className="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
				<div className="flex items-center justify-between">
					<h3 className="text-base font-semibold text-sky-500">Envie con Nosotros</h3>
					<a
						className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-slate-900 text-white hover:bg-slate-700"
						href="/"
					>
						<span>
							{callout.product}
							<span aria-hidden="true"> →</span>
						</span>
					</a>
				</div>
				<div className="mt-3 flex items-center">
					<p className="text-[2.5rem] leading-none text-slate-900">
						$<span className="font-bold">{callout.price}</span>
					</p>
					<p className="ml-3 space-x-1 text-sm">
						<span className="font-semibold text-slate-900">la libra de Miscelaneas,</span>
						<span className="text-slate-500">en cuba no se paga nada</span>
					</p>
				</div>
				<p className="mt-6 text-sm leading-6 text-slate-600">
					Envie Cajas de Miscelaneas a su Familia en Cuba, al mejor precio de toda el aerea
				</p>
				<h4 className="sr-only">All-access features</h4>
				<ul className="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700">
					<li className="flex">
						<ArchiveBoxIcon className="w-20 h-auto text-[#0EA5E9]" />
						<p className="ml-5">
							<strong className="font-semibold text-slate-900">Over 500+ components</strong>{" "}
							everything you need to build beautiful application UIs, marketing sites, ecommerce
							stores, and more.
						</p>
					</li>
					<li className="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 32 32"
							className="h-8 w-8 flex-none"
						>
							<path fill="#fff" d="M0 0h32v32H0z"></path>
							<rect
								width="23"
								height="22"
								x="3"
								y="5"
								stroke="#0EA5E9"
								strokeLinejoin="round"
								strokeWidth="1.5"
								rx="2"
							></rect>
							<rect
								width="10"
								height="18"
								x="19"
								y="9"
								fill="#E0F2FE"
								stroke="#0EA5E9"
								strokeLinejoin="round"
								strokeWidth="1.5"
								rx="2"
							></rect>
							<circle cx="6" cy="8" r="1" fill="#0EA5E9"></circle>
							<circle cx="9" cy="8" r="1" fill="#0EA5E9"></circle>
							<path stroke="#0EA5E9" strokeWidth="1.5" d="M3 11h16"></path>
						</svg>
						<p className="ml-5">
							<strong className="font-semibold text-slate-900">Every site template</strong>{" "}
							beautifully designed, expertly crafted website templates built with modern
							technologies like React and Next.js.
						</p>
					</li>
					<li className="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 32 32"
							className="h-8 w-8 flex-none"
						>
							<path fill="#fff" d="M0 0h32v32H0z"></path>
							<path
								fill="#E0F2FE"
								d="M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z"
							></path>
							<path
								stroke="#0EA5E9"
								strokeLinecap="round"
								strokeWidth="1.5"
								d="M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5"
							></path>
							<circle cx="16" cy="16" r="14" stroke="#0EA5E9" strokeWidth="1.5"></circle>
						</svg>
						<p className="ml-5">
							<strong className="font-semibold text-slate-900">Lifetime access</strong> — get
							instant access to everything we have today, plus any new components and templates we
							add in the future.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

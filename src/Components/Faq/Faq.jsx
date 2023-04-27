import { React } from "react";
export const Faq = () => {
	return (
		<div class="container my-12 pb-12 mx-auto grid grid-cols-1 gap-x-14 gap-y-16  lg:grid-cols-12">
			<div class="lg:col-span-4">
				<h2 class="text-base font-semibold leading-7 text-blue-500">Preguntas Frecuentes</h2>
				<p class="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 xl:text-3xl xl:leading-[2.5rem]">
					Todo lo que Necesita Saber y Mas...
				</p>
			</div>
			<div class="-mb-4 space-y-12 lg:col-span-8 xl:col-span-7 xl:col-start-6">
				<section>
					<h3 class="text-sm font-semibold leading-7 text-slate-400">General</h3>
					<dl class="mt-2 divide-y divide-slate-100">
						<details class="group py-4 marker:content-[`'`]">
							<summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 [&amp;::-webkit-details-marker]:hidden">
								Que tiempo demora un Envio?
								<svg
									class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M18 12H6"></path>
									<path class="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div class="pb-6 pt-6">
								<div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										Tailwind UI products are a
										<strong>one-time purchase, with no recurring subscription</strong>. When you
										purchase any Tailwind UI product, you have access to all of the content in that
										product forever.
									</p>
								</div>
							</div>
						</details>
						<details class="group py-4 marker:content-[`'`]">
							<summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 [&amp;::-webkit-details-marker]:hidden">
								Donde puedo conocer el estado de un Envio?
								<svg
									class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M18 12H6"></path>
									<path class="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div class="pb-6 pt-6">
								<div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										When you purchase any Tailwind UI product, any improvements we make or new
										content we add to that product will always be free for anyone who owns that
										product.
									</p>
									<p>
										<strong>Individual component packages:</strong> When you buy the Marketing,
										Application UI, or Ecommerce component packages individually, you'll get any new
										components we add to those packages in the future at no extra cost.
									</p>
									<p>
										We regularly add new components to these packages whenever we have new ideas,
										and you can see what previous updates have looked like{" "}
										<a href="/changelog">in our changelog</a>.
									</p>
									<p>
										Any <em>new</em> component packages we release are considered separate products,
										and can be purchased at an upgrade price.
									</p>
									<p>
										<strong>All-access:</strong> When you purchase an all-access license, you get
										access to every component package <em>and</em> every site template available
										today, plus any additional component packages or templates we release in the
										future at no additional cost.
									</p>
									<p>
										This means that if we add a brand new component package like “Journalism” or
										design a new social media website template, access to those products are
										included in your original purchase, with no upgrade cost.
									</p>
								</div>
							</div>
						</details>
					</dl>
				</section>
				<section>
					<h3 class="text-sm font-semibold leading-7 text-slate-400">Aduana Cuba</h3>
					<dl class="mt-2 divide-y divide-slate-100">
						<details class="group py-4 marker:content-[`'`]">
							<summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 [&amp;::-webkit-details-marker]:hidden">
								Are Figma, Sketch, or Adobe XD files included?
								<svg
									class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M18 12H6"></path>
									<path class="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div class="pb-6 pt-6">
								<div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										No, design assets for tools like Figma, Sketch, or Adobe XD are not included.
									</p>
									<p>
										We don't produce high-quality design artifacts as part of our own design and
										development process, so building these extra resources means we can't spend as
										much time creating new examples in code which is where we believe we can provide
										the most value.
									</p>
								</div>
							</div>
						</details>
						<details class="group py-4 marker:content-[`'`]">
							<summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 [&amp;::-webkit-details-marker]:hidden">
								What JS framework is used?
								<svg
									class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M18 12H6"></path>
									<path class="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div class="pb-6 pt-6">
								<div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										All of the components in Tailwind UI are provided in three formats: React, Vue,
										and vanilla HTML.
									</p>
									<p>
										The React and Vue examples are fully functional out-of-the-box, and are powered
										by <a href="https://headlessui.dev">Headless UI</a> — a library of unstyled
										components we designed to integrate perfectly with Tailwind CSS. Headless UI
										supports both React and Vue 3, but is not compatible with Vue 2.
									</p>
									<p>
										The vanilla HTML examples <strong>do not include any JavaScript</strong> and are
										designed for people who prefer to write any necessary JavaScript themselves.
									</p>
									<p>
										Most of the components do not rely on JS at all, but for the ones that do
										(dropdowns, modals, etc.) we've provided some simple comments in the HTML to
										explain things like what classes you need to use for different states (like a
										toggle switch being on or off), or what classes we recommend for transitioning
										elements on to or off of the screen (like a modal opening).
									</p>
									<p>
										To get a better idea of how this looks in practice,{" "}
										<a href="/documentation#integrating-with-javascript-frameworks">
											check out our documentation
										</a>
										.
									</p>
								</div>
							</div>
						</details>
						<details class="group py-4 marker:content-[`'`]">
							<summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 [&amp;::-webkit-details-marker]:hidden">
								What version of Tailwind CSS is used?
								<svg
									class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M18 12H6"></path>
									<path class="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div class="pb-6 pt-6">
								<div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										Everything in Tailwind UI is designed and developed for the latest version of
										Tailwind CSS, which is currently Tailwind CSS v3.3.
									</p>
								</div>
							</div>
						</details>
						<details class="group py-4 marker:content-[`'`]">
							<summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 [&amp;::-webkit-details-marker]:hidden">
								What browsers are supported?
								<svg
									class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M18 12H6"></path>
									<path class="group-open:hidden" d="M12 6v12"></path>
								</svg>
							</summary>
							<div class="pb-6 pt-6">
								<div class="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
									<p>
										The components in Tailwind UI are designed to work in the latest, stable
										releases of all major browsers, including Chrome, Firefox, Safari, and Edge.
									</p>
									<p>We don't support Internet Explorer 11.</p>
								</div>
							</div>
						</details>
					</dl>
				</section>
			</div>
		</div>
	);
};

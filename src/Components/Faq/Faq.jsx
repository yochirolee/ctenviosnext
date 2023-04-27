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
						<details class="group py-4 ">
							<summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 ">
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
						<details class="group py-4 ">
							<summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 ">
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
						<details class="group py-4 ">
							<summary class="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-600 ">
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
					</dl>
				</section>
			</div>
		</div>
	);
};

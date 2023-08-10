import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { React } from "react";
export default function OrdersHistory() {
	return (
		<div class="mt-20">
			<div>
				<div className="lg:col-span-4 my-10">
					<h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-600 xl:text-3xl xl:leading-[2.5rem]">
						Historial de Ordenes
					</h2>
					<p className="tracking-tight mt-4 text-sm text-slate-600 ">
						Revise sus ordenes y sus tiempos de entrega o descubra productos similares.
					</p>
				</div>
				<div className="la">
					<div className=" ">
						<div class="p-4 my-4 border-y bg-gray-50 flex flex-col gap-10">
							<dl class=" inline-flex justify-between lg:justify-start gap-10 ">
								<div className="text-sm">
									<dt className=" text-slate-600">Order number</dt>
									<dd className="">WU88191111</dd>
								</div>
								<div className="hidden">
									<dt className="awe axv">Date placed</dt>
									<dd className="ku axr">
										<time datetime="2021-07-06">Jul 6, 2021</time>
									</dd>
								</div>
								<div className="text-sm">
									<dt className="text-slate-600">Total amount</dt>
									<dd className="">$160.00</dd>
								</div>
							</dl>
						</div>
						<h4 className="hidden">Items</h4>
						<ul role="list" className="acc acg">
							<li>
								<div className="flex gap-4 my-4 items-center">
									<div className="shrink-0  w-24 h-24 lg:w-64 lg:h-64 border ">
										<img
											src="https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-02.jpg"
											alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
											className="  h-full w-full   object-cover"
										/>
									</div>
									<div>
										<div className="flex flex-col span-4">
											<h5 className="text-slate-700 md:text-xl">Micro Backpack</h5>
											<div className="inline-flex gap-4">
												<p className="text-xs lg:text-base my-2 text-slate-600">$70.00</p>
												<p className="text-xs lg:text-base my-2 text-slate-600">Qty: 1</p>
											</div>
										</div>
										<p class="hidden md:block text-slate-500 text-sm lg:text-base ">
											Are you a minimalist looking for a compact carry option? The Micro Backpack is
											the perfect size for your essential everyday carry items. Wear it like a
											backpack or carry it like a satchel for all-day use.
										</p>
									</div>
								</div>
								<div>
									<div className="inline-flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
											class="w-6 h-6 text-green-500"
										>
											<path
												fill-rule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
												clip-rule="evenodd"
											></path>
										</svg>
										<p class="text-sm text-slate-400">
											Delivered on <time datetime="2021-07-12">July 12, 2021</time>
										</p>
									</div>
									<div className="inline-flex w-full justify-between p-4 my-4 border-y">
										<div className="text-sm text-blue-600 ">
											<a href="#" className="">
												View product
											</a>
										</div>
										<div className=" border-l"></div>
										<div className="text-sm text-blue-600 ">
											<a href="#" className="">
												Buy again
											</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="flex gap-4 my-4 items-center">
									<div className="shrink-0  w-24 h-24 lg:w-64 lg:h-64 border ">
										<img
											src="https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg"
											alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
											className="  h-full w-full   object-cover"
										/>
									</div>
									<div>
										<div className="flex flex-col span-4">
											<h5 className="text-slate-700 md:text-xl">Micro Backpack</h5>
											<div className="inline-flex gap-4">
												<p className="text-xs lg:text-base my-2 text-slate-600">$70.00</p>
												<p className="text-xs lg:text-base my-2 text-slate-600">Qty: 1</p>
											</div>
										</div>
										<p class="hidden md:block text-slate-500 text-sm lg:text-base ">
											Are you a minimalist looking for a compact carry option? The Micro Backpack is
											the perfect size for your essential everyday carry items. Wear it like a
											backpack or carry it like a satchel for all-day use.
										</p>
									</div>
								</div>
								<div>
									<div className="inline-flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
											class="w-6 h-6 text-green-500"
										>
											<path
												fill-rule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
												clip-rule="evenodd"
											></path>
										</svg>
										<p class="text-sm text-slate-400">
											Delivered on <time datetime="2021-07-12">July 12, 2021</time>
										</p>
									</div>
									<div className="inline-flex w-full justify-between p-4 my-4 border-y">
										<div className="text-sm text-blue-600 ">
											<a href="#" className="">
												View product
											</a>
										</div>
										<div className=" border-l"></div>
										<div className="text-sm text-blue-600 ">
											<a href="#" className="">
												Buy again
											</a>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="  ">
						<div class="p-4 my-4 border-y bg-gray-50 flex flex-col gap-10">
							<dl class=" inline-flex justify-between lg:justify-start gap-10 ">
								<div className="text-sm">
									<dt className=" text-slate-600">Order number</dt>
									<dd className="">WU88191111</dd>
								</div>
								<div className="hidden">
									<dt className="awe axv">Date placed</dt>
									<dd className="ku axr">
										<time datetime="2021-07-06">Jul 6, 2021</time>
									</dd>
								</div>
								<div className="text-sm">
									<dt className="text-slate-600">Total amount</dt>
									<dd className="">$160.00</dd>
								</div>
							</dl>
						</div>
						<h4 className="hidden">Items</h4>
						<ul role="list" className="acc acg">
							<li>
								<div className="flex gap-4 my-4 items-center">
									<div className="shrink-0  w-24 h-24 lg:w-64 lg:h-64 border ">
										<img
											src="https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-02.jpg"
											alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
											className="  h-full w-full   object-cover"
										/>
									</div>
									<div>
										<div className="flex flex-col span-4">
											<h5 className="text-slate-700 md:text-xl">Micro Backpack</h5>
											<div className="inline-flex gap-4">
												<p className="text-xs lg:text-base my-2 text-slate-600">$70.00</p>
												<p className="text-xs lg:text-base my-2 text-slate-600">Qty: 1</p>
											</div>
										</div>
										<p class="hidden md:block text-slate-500 text-sm lg:text-base ">
											Are you a minimalist looking for a compact carry option? The Micro Backpack is
											the perfect size for your essential everyday carry items. Wear it like a
											backpack or carry it like a satchel for all-day use.
										</p>
									</div>
								</div>
								<div>
									<div className="inline-flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
											class="w-6 h-6 text-green-500"
										>
											<path
												fill-rule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
												clip-rule="evenodd"
											></path>
										</svg>
										<p class="text-sm text-slate-400">
											Delivered on <time datetime="2021-07-12">July 12, 2021</time>
										</p>
									</div>
									<div className="inline-flex w-full justify-between p-4 my-4 border-y">
										<div className="text-sm text-blue-600 ">
											<a href="#" className="">
												View product
											</a>
										</div>
										<div className=" border-l"></div>
										<div className="text-sm text-blue-600 ">
											<a href="#" className="">
												Buy again
											</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="flex gap-4 my-4 items-center">
									<div className="shrink-0  w-24 h-24 lg:w-64 lg:h-64 border ">
										<img
											src="https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg"
											alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps."
											className="  h-full w-full   object-cover"
										/>
									</div>
									<div>
										<div className="flex flex-col span-4">
											<h5 className="text-slate-700 md:text-xl">Micro Backpack</h5>
											<div className="inline-flex gap-4">
												<p className="text-xs lg:text-base my-2 text-slate-600">$70.00</p>
												<p className="text-xs lg:text-base my-2 text-slate-600">Qty: 1</p>
											</div>
										</div>
										<p class="hidden md:block text-slate-500 text-sm lg:text-base ">
											Are you a minimalist looking for a compact carry option? The Micro Backpack is
											the perfect size for your essential everyday carry items. Wear it like a
											backpack or carry it like a satchel for all-day use.
										</p>
									</div>
								</div>
								<div>
									<div className="inline-flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
											class="w-6 h-6 text-green-500"
										>
											<path
												fill-rule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
												clip-rule="evenodd"
											></path>
										</svg>
										<p class="text-sm text-slate-400">
											Delivered on <time datetime="2021-07-12">July 12, 2021</time>
										</p>
									</div>
									<div className="inline-flex w-full justify-between p-4 my-4 border-y">
										<div className="text-sm text-blue-600 ">
											<a href="#" className="">
												View product
											</a>
										</div>
										<div className=" border-l"></div>
										<div className="text-sm text-blue-600 ">
											<a href="#" className="">
												Buy again
											</a>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

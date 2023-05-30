"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useMutation } from "@tanstack/react-query";

export default function SlideOver({ open, setOpen, selectedCustomer }) {
	const mutationCreate = useMutation({
		mutationFn: (newCustomer) => {
			return fetch("http://localhost:3001/api/v1/customers/create", {
				method: "POST",
				body: JSON.stringify(newCustomer),
				headers: {
					"Content-Type": "application/json",
				},
			});
		},
	});

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-2xl">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
											<button
												type="button"
												className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
												onClick={() => setOpen(false)}
											>
												<span className="sr-only">Close panel</span>
												<XMarkIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</Transition.Child>
									<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
										<div className="px-4 sm:px-6">
											<Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
												Customer Form
											</Dialog.Title>
										</div>
										<div className="relative mt-6 flex-1 px-4 sm:px-6">
											{mutationCreate?.isLoading ? <div>Creating Please Wait</div> : <></>}
											{mutationCreate?.isError ? (
												<div>{mutationCreate?.error?.message}</div>
											) : (
												<></>
											)}
											<p>no customer selected</p>
											<button
												onClick={() =>
													mutationCreate.mutate({
														firstName: "cariabe",
														lastName: "soy",
														license: "6056555555",
														passport: "J50456",
														email: "testoooooo@gmail.com",
														address: "Avenida 31 entre 30 y 34 No 3008",
														phone: "529259942",
														mobile: "7952445499",
														countryId: 1,
														stateId: 1,
														cityId: 1,
														agencyId: 1,
													})
												}
											>
												Mutation
											</button>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

import { useSignIn } from "@clerk/nextjs";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export const SignInForm = () => {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false); // [1
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState(null);

	const { signIn, setActive, isLoaded } = useSignIn();

	console.log(isLoaded, "isLoaded");

	if (!isLoaded) {
		return null;
	}

	const submit = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const result = await signIn.create({
				identifier: email,
				password,
			});
			if (result.status === "complete") {
				await setActive({ session: result.createdSessionId });
			}

			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
						alt="CTEnvios"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={submit}>
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
								<div className="text-sm">
									<a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex  w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								<div className="flex gap-2 items-center">
									{isLoading ? (
										<EllipsisHorizontalIcon className="  animate-pulse mx-auto h-5 w-5 text-white " />
									) : null}
									Sign in
								</div>
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Not a member?{" "}
						<Link
							href="/auth/SignUp"
							className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
						>
							Register Here
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

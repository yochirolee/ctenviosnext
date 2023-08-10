import SignUpForm from "@/Components/Auth/SignUpForm";

export default function SignUp() {
	return (
		<div className="grid grid-flow-col grid-cols-2">
			<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
				<img className="object-cover backdrop-blur-sm rounded-xl w-full  h-full" src="/ship.jpg" />
			</div>

			<div className="col-span-4">
				<SignUpForm />
			</div>
		</div>
	);
}

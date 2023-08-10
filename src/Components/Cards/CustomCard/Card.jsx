import Image from "next/image";
import { React } from "react";

const CardHeader = ({ children, className }) => {
	return <div className={`absolute z-10 top-1 flex-col items-start ${className}`}>{children}</div>;
};

const CardImage = ({ children, className }) => {
	return <div className={`z-0 w-full h-full object-cover ${className}`}>{children}</div>;
};

const CardFooter = ({ children, className }) => {
	return (
		<div className="p-3 h-auto flex items-center color-inherit subpixel-antialiased bg-background/10 backdrop-blur backdrop-saturate-150 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
			{children}
		</div>
	);
};

const Button = ({ children, className, radius, size }) => {
	return (
		<button
			className={`inline-flex mx-auto  gap-2 items-center my-2 px-2 py-1.5 font-light   rounded-${radius} text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
		>
			{children}
		</button>
	);
};

export const Card = () => {
	return (
		<div className="w-full mt-10   relative h-[500px] col-span-12 sm:col-span-7">
			<CardHeader className="absolute z-10 top-1 flex-col items-start">
				<p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
				<h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
			</CardHeader>
			<CardImage>
				<Image
					fill
					src="/slider4.jpg"
					alt="Ship"
					className="lg:block rounded-xl object-center object-cover absolute hidden -z-10 inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
				></Image>
			</CardImage>

			<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
				<div className="flex flex-grow gap-2 items-center">
					<img
						alt="Breathing app icon"
						className="rounded-full w-10 h-11 bg-black"
						src="/images/breathing-app-icon.jpeg"
					/>
					<div className="flex flex-col">
						<p className="text-tiny text-white/60">Breathing App</p>
						<p className="text-tiny text-white/60">Get a good night's sleep.</p>
					</div>
				</div>
				<Button radius="full" size="sm">
					Get App
				</Button>
			</CardFooter>
		</div>
	);
};

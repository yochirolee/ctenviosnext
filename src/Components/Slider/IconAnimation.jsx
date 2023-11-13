import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TruckIcon } from "@heroicons/react/24/outline";

const IconAnimation = () => {
	const truckControls = useAnimation();

	const animateTruck = async () => {
		while (true) {
			await truckControls.start({ x: "80%", transition: { duration: 3, ease: "linear" } });
			await truckControls.start({ x: "-80%", transition: { duration: 0 } });
		}
	};

	// Llama a la función de animación cuando el componente se monta
	useEffect(() => {
		animateTruck();
	}, []);
	return (
		<motion.div
			className="  top-10 w-full overflow-x-hidden absolute"
			animate={truckControls}
		>
			<TruckIcon className="h-6 w-6" />
		</motion.div>
	);
};

export default IconAnimation;

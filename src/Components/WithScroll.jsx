"use client";
import React, { useState, useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const VARIANT_LENGTH = 54;

export const WithScrollVariants = (Component) => {
	const variants = Array.from({ length: VARIANT_LENGTH }, (_, i) => `Variant ${i}`);

	return (props) => {
		const [variantIndex, setVariantIndex] = useState(0);
		const [imagesLoaded, setImagesLoaded] = useState(false);
		const ref = useRef(null);
		const { scrollYProgress } = useScroll({
			target: ref,
			offset: ["0 0.7", "end 0.85"],
		});

		useEffect(() => {
			const imageSources = [];
			document.querySelectorAll("img").forEach((imgElement) => {
				imageSources.push(imgElement.src);
			});

			const imagePromises = imageSources.map((src) => {
				return new Promise((resolve, reject) => {
					const img = new Image();
					img.onload = () => resolve(src);
					img.onerror = () => reject(src);
					img.src = src;
				});
			});

			Promise.all(imagePromises)
				.then(() => setImagesLoaded(true))
				.catch(() => setImagesLoaded(false));
		}, []);

		useEffect(() => {
			const newVariantIndex = Math.round(scrollYProgress.current * (VARIANT_LENGTH - 2)) + 1;

			setVariantIndex(newVariantIndex);
		}, [scrollYProgress.current]);

		useMotionValueEvent(scrollYProgress, "change", (currentProgress) => {
			const newVariantIndex = Math.round(scrollYProgress.current * (VARIANT_LENGTH - 2)) + 1;

			if (newVariantIndex !== variantIndex && imagesLoaded) {
				setVariantIndex(newVariantIndex);
			}
		});

		return (
			<>
				<div style={{ display: "none" }}>
					{variants.map((variant) => (
						<Component key={variant} {...props} variant={variant} />
					))}
				</div>
				<Component {...props} variant={variants[variantIndex]} ref={ref} />
			</>
		);
	};
};

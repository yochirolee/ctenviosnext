import Image from "next/image";
import BlurFade from "../Ui/blur-fade";

const images = ["/slider4.webp", "/truck.webp", "/happy_cuban.webp", "/ship2.jpg"];

const additionalImages = images.map((image, index) => {
	const isLandscape = index % 2 === 0;
	const width = isLandscape ? 400 : 200;
	const height = isLandscape ? 200 : 400;
	/* return `${image}?width=${width}&height=${height}`; */
	return {
		url: image,
		height: height,
		width: width,
	};
});

export function BlurFadeDemo() {
	return (
		<section id="photos mx-4">
			<div className="columns-3 gap-4 sm:columns-4">
				{additionalImages.map((image, idx) => (
					<BlurFade key={image.url} delay={0.25 + idx * 0.05} inView>
						<Image
							className="mb-4 size-full rounded-lg object-contain"
							src={image.url}
							width={image.width}
							height={image.height}
							alt={`Random stock image ${idx + 1}`}
						/>
					</BlurFade>
				))}
			</div>
		</section>
	);
}

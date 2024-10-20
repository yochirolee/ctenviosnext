import { React } from "react";
import { ShadowBg1, ShadowBg2 } from "../ui/ShadowBg1";
import { HeroRight } from "./HeroRight";
import { HeroLeft } from "./HeroLeft";

export const Hero = () => {
	return (
		<>
			<ShadowBg1 />
			<div className="grid  lg:grid-flow-col lg:grid-cols-2 gap-20  items-center     py-32  ">
				<HeroLeft />
				<HeroRight />
			</div>
			<ShadowBg2 />
		</>
	);
};

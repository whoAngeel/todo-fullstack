import React from "react";
import defaultBanner from "/public/banners/banner3.jpg";
import { useBanner } from "../context/BannerContext";

function Banner() {
	const { banner } = useBanner();
	return (
		<div
			className="w-full h-56 bg-cover bg-center brightness-75 fixed -z-20"
			style={{ backgroundImage: `url(${banner.src})` }}
		>
			<div className="h-full w-full bg-cerise-red-300/50 "></div>
		</div>
	);
}

export default Banner;

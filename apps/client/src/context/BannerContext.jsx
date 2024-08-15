import { createContext, useCallback, useContext, useState } from "react";
import defaultBanner from "/public/banners/banner1.jpg";

const BannerContext = createContext();

export const useBanner = () => {
	const context = useContext(BannerContext);
	if (!context) throw new Error("UseBanner must be used within an BannerProvider");
	return context;
};

const banners = [
	{ id: 1, src: "./public/banners/banner1.jpg", alt: "Banner 1" },
	{ id: 2, src: "./public/banners/banner2.jpg", alt: "Banner 2" },
	{ id: 3, src: "./public/banners/banner3.jpg", alt: "Banner 3" },
	{ id: 4, src: "./public/banners/banner4.jpg", alt: "Banner 4" },
	{ id: 5, src: "./public/banners/banner5.jpg", alt: "Banner 5" },
	{ id: 6, src: "./public/banners/banner6.jpg", alt: "Banner 6" },
	{ id: 7, src: "./public/banners/banner7.jpg", alt: "Banner 7" },
	// Agrega más banners según sea necesario
];

export const BannerProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const [banner, setBanner] = useState(() => {
		let selectedBanner = JSON.parse(localStorage.getItem("banner"));
		if (!selectedBanner) selectedBanner = banners[0];
		return selectedBanner;
	});

	const handleShowModal = () => setShowModal(true);
	const handleOkModal = () => setShowModal(false);
	const handleCancelModal = () => setShowModal(false);

	return (
		<BannerContext.Provider
			value={{
				showModal,
				handleCancelModal,
				handleOkModal,
				handleShowModal,
				showModal,
				banner,
				setBanner,
			}}
		>
			{children}
		</BannerContext.Provider>
	);
};

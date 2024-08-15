import { Modal, Row } from "antd";
import React from "react";
import { useBanner } from "../context/BannerContext";

const banners = [
	{ id: 1, src: "./public/banners/banner1-sm.jpg", alt: "Banner 1" },
	{ id: 2, src: "./public/banners/banner2-sm.jpg", alt: "Banner 2" },
	{ id: 3, src: "./public/banners/banner3-sm.jpg", alt: "Banner 3" },
	{ id: 4, src: "./public/banners/banner4-sm.jpg", alt: "Banner 4" },
	{ id: 5, src: "./public/banners/banner5-sm.jpg", alt: "Banner 5" },
	{ id: 6, src: "./public/banners/banner6-sm.jpg", alt: "Banner 6" },
	{ id: 7, src: "./public/banners/banner7-sm.jpg", alt: "Banner 7" },
	// Agrega más banners según sea necesario
];

function ModalBanner() {
	const { showModal, handleOkModal, handleCancelModal, banner } = useBanner();
	return (
		<Modal
			open={showModal}
			title="Cambiar el banner"
			onOk={handleOkModal}
			onCancel={handleCancelModal}
		>
			<div className="grid grid-cols-3 gap-4">
				{banners.map((b) => (
					<div
						key={b.id}
						className={`cursor-pointer border-2 ${
							banner?.id === b.id
								? "border-blue-500"
								: "border-transparent"
						}`}
					>
						<img src={b.src} alt={b.alt} className="h-8 w-20 " />
					</div>
				))}
			</div>
		</Modal>
	);
}

export default ModalBanner;

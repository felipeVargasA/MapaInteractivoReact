import React, { useState } from "react";

const MainVideo = () => {
	const [openModal, setOpenModal] = useState(true);

	return (
		openModal && (
			<>
				<div className="bg-black opacity-40 fixed inset-0 z-50"></div>
				<div
					className="justify-center items-center flex fixed inset-0 z-50"
					onClick={() => setOpenModal(false)}
				>
					<iframe
						width="80%"
						height="80%"
						src="https://www.youtube.com/embed/s0mkxit5pWo?autoplay=1"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
			</>
		)
	);
};

export default MainVideo;

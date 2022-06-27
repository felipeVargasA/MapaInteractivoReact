import React, { useState } from "react";

const MainVideo = () => {

    const [openModal, setOpenModal] = useState(true);

	return (openModal &&
		<>
			<div className="bg-black opacity-40 fixed inset-0 z-50"></div>
			<div
				className="justify-center items-center flex fixed inset-0 z-50"
				onClick={() => setOpenModal(false)}
			>
				<div
					className="rounded-lg w-[80%] bg-white"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>

                    <video width="100%" height="100%" controls autoPlay muted>
                        <source src="/videos/intro-skyview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>

                </div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
};

export default MainVideo;

import React from "react";
import { data } from "../../data/modal_data";

const Modal = ({ order, close }) => {

	return (
		<>
			<div className="bg-black opacity-40 fixed inset-0 z-50"></div>
			<div
				className="justify-center items-center flex fixed inset-0 z-50"
				onClick={() => close(false)}
			>
				<div
					className="rounded-lg w-[500px] bg-white pb-6"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="relative flex-auto">
						<img
							src={data[order].banner}
							alt="banner1"
						/>
					</div>
					<h3 className="text-2xl font-bold px-4 pt-4 pb-2">
						{data[order].title}
					</h3>
					<div className="relative px-4 pb-6 flex-auto">
						{data[order].content}
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
};

export default Modal;

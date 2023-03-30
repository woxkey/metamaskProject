import React, {useState} from 'react';
import {redirect} from 'react-router-dom';

const Modal: React.FunctionComponent = (): React.ReactElement => {
	const [showModal, setShowModal] = useState<boolean>(true);

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div
			className={`${
				showModal ? 'block' : 'hidden'
			} fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-[#1717176b]`}
		>
			<div className="my-[15%] mx-auto  w-[422px] h-[295px] bg-[#262628]">
				<p className="bg-transparent text-[36px] leading-[43px] text-[#E75626] pt-[48px] px-[88px]">
					metamask extention
				</p>
				<p className="text-[#FFFFFF] text-[16px] leading-[19px] bg-transparent font-normal font-['Inter'] text-center pt-[29px] px-[50px]">
					To work with our application, you have to install the{' '}
					<a
						href="https://metamask.io/download/"
						target={'_blank'}
						className="text-[#E75626] bg-transparent font-['Inter'] cursor-pointer"
					>
						Metamask browser extension
					</a>
				</p>
				<button
					onClick={closeModal}
					className="text-[18px] leading-[22px] bg-[#E75626] px-[24px] py-[6px] rounded-[30px] mt-[65px] mx-[146px]"
				>
					Skip this step
				</button>
			</div>
		</div>
	);
};

export default Modal;

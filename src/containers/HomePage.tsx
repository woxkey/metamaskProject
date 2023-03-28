import React from 'react';
import Planet from '../images/planetBg.png';
import SecondText from '../images/secondText.svg';

const HomePage = () => {
	return (
		<>
			<div className="container mx-auto pt-[202px] flex justify-between">
				<div className="relative pb-[45px] inline-block">
					<h1 className="text-[120px] leading-[120px] ">
						Explore Your own planet
					</h1>
					<h2 className="text-[120px] leading-[119px]   ">
						In{' '}
						<span className="text-[#171719]  myTextStroke bg-transparent">
							our New
						</span>{' '}
						metaverse
					</h2>
					{/* <img
					className="absolute top-[-59px] left-[660px] bg-transparent z-20"
					src={SecondText}
					alt="#"
				/> */}
					<img
						className="bg-transparent absolute top-[-50px] left-[664px]  "
						src={Planet}
						alt="#"
					/>
				</div>
				<div className="inline-block ">
					<div className="flex flex-col justify-center items-center">
						<h3 className="text-[32px] leading-[38px] pb-[42px]">
							Roadmap stats
						</h3>
						<span className="text-[#E75626] text-[28px] leading-[34px] pb-3">
							12, 345
						</span>
						<p className="border-b-2 pb-2">Lorem ipsum dolor</p>
						<span className="text-[#E75626] text-[28px] leading-[34px] pb-3 mt-3">
							12, 345
						</span>
						<p className="border-b-2 pb-2">Lorem ipsum dolor</p>
						<span className="text-[#E75626] text-[28px] leading-[34px] pb-3 mt-2">
							12, 345
						</span>
						<p>Lorem ipsum dolor</p>
					</div>
				</div>
			</div>
			<div className="container mx-auto lg ">
				<p className="w-[421px] text-[16px] leading-[19px] font-['Montserrat']">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</div>
		</>
	);
};

export default HomePage;

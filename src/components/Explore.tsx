import React from 'react';
import Planet from '../images/planetBg.png';
import 'react-circular-progressbar/dist/styles.css';
import SvgLines from 'react-mt-svg-lines';

const Explore: React.FunctionComponent = (): React.ReactElement => {
	return (
		<>
			<div className="container mx-auto pt-[202px] flex justify-between">
				<div className="relative pb-[45px] inline-block ">
					<h1 className="text-[120px] leading-[120px] bg-transparent  relative  z-10">
						Explore Your own planet
					</h1>
					<h2 className="text-[120px] leading-[119px] bg-opacity-0 z-10">
						In{' '}
						<span className="text-[#171719]  myTextStroke bg-transparent  z-10">
							our New
						</span>{' '}
						metaverse
					</h2>

					<img
						className=" absolute top-[-50px] left-[664px] bg-transparent mix-blend-exclusion z-20"
						src={Planet}
						alt="#"
					/>
					<SvgLines animate={500} duration={10000} playback={'infinite'}>
						<div className="caret-transparent">
							<svg width={'120%'} className="lineSvg" viewBox="0 0 100 100">
								<path
									d=" M 50 30 A 20 20 0 1 1 50 70 A 20 20 0 1 1 50 30 Z"
									stroke="#E75626"
									strokeWidth="0.1"
									fill="none"
								/>
							</svg>
						</div>
					</SvgLines>
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

export default Explore;

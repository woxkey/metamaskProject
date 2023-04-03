import React from 'react';
import Planet from '../images/planetBg.png';
import 'react-circular-progressbar/dist/styles.css';
import SvgLines from 'react-mt-svg-lines';
import button from '../images/button.svg';
import smallBtn from '../images/smallDot.svg';
import fullBlackMatter from '../images/fullBlackMatter.svg';
import layer1 from '../images/layer1.svg';

const Explore: React.FunctionComponent = (): React.ReactElement => {
	return (
		<>
			<div className="container mx-auto pt-[202px] flex justify-between">
				<div className="relative pb-[45px] inline-block ">
					<h1 className="text-[120px] leading-[120px] bg-transparent  relative  z-30">
						Explore Your own planet
					</h1>
					<h2 className="text-[120px] leading-[119px] bg-opacity-0 relative bg-transparent z-30">
						In{' '}
						<span className="text-[#171719]  myTextStroke bg-transparent  z-30">
							our New
						</span>{' '}
						metaverse
					</h2>

					<img
						className=" absolute top-[-50px] left-[664px] bg-transparent mix-blend-exclusion z-40"
						src={Planet}
						alt="#"
					/>
					<div className="relative z-20 top-[-235px] left-0">
						<SvgLines animate={500} duration={10000} playback={'infinite'}>
							<div className="caret-transparent ">
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
					<div className=" z-20 flex justify-center items-center absolute top-[-151px] right-[144px] py-[6px] px-3 bg-white rounded-[15px]">
						<span className="bg-transparent text-[#171719] ">Q1 2022</span>
						<img className="bg-transparent h-6" src={button} alt="#" />
					</div>
					<img
						className="absolute top-[100px] right-[-62px] z-20"
						src={smallBtn}
						alt="#"
					/>
					<img
						className="absolute top-[343px] right-[174px] z-20"
						src={smallBtn}
						alt="#"
					/>
					<img
						className="w-[532px] h-[532px] absolute top-[-158px] right-[-85px] blackMatter"
						src={fullBlackMatter}
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

export default Explore;

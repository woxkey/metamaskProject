import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getUser} from '../features/UserSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import halfImage from '../images/halfImage.svg';
import firstLayer from '../images/firstLayer.svg';
import blackMatter from '../images/blackMatter.svg';
import fourthLayer from '../images/fourthLayer.svg';
import fifthLayer from '../images/fifthLayer.svg';

const PersonalData: React.FunctionComponent = (): React.ReactElement => {
	const dispatch = useAppDispatch();
	const params = useParams();
	const {user} = useAppSelector((state) => state.user);

	useEffect(() => {
		dispatch(getUser(params.id || ''));
	}, []);
	return (
		<>
			<div className="flex flex-col container mx-auto pt-28">
				<h2 className="text-[48px] leading-[58px] mb-12">PErsonal data</h2>
				<p className="text-[24px] leading-[29px] mb-2">name</p>
				<p className="text-[32px] leading-[38px] text-[#E75626] mb-[22px]">
					{user.username}
				</p>
				<p className="text-[24px] leading-[29px] mb-2">email</p>
				<p className="text-[32px] leading-[38px] text-[#E75626] mb-[22px]">
					{user.email}
				</p>
				<p className="text-[24px] leading-[29px] mb-2">wallet</p>
				<p className="text-[32px] leading-[38px] text-[#E75626] mb-[22px]">
					{user.address}
				</p>
			</div>
			<img
				className="w-[320px] h-[320px] fixed top-[45%] translate-y-[-50%] z-10 bg-transparent right-0"
				src={halfImage}
				alt="halfPlanet"
			/>
			<img
				src={firstLayer}
				className="w-[532px] h-[532px] fixed top-[45%] translate-y-[-50%]  right-0"
				alt=""
			/>
			<img
				src={blackMatter}
				className="w-[526px] h-[526px] fixed top-[45%] translate-y-[-50%] bg-transparent  right-0"
				alt="blackMatter"
			/>
			<img
				src={fourthLayer}
				className="w-[384px] h-[384px] fixed top-[45%] translate-y-[-50%] bg-transparent  right-0"
				alt="thirdLayer"
			/>
			<img
				className="w-[370px] h-[370px] fixed top-[45%] translate-y-[-50%] bg-transparent  right-0"
				src={fifthLayer}
				alt="fourthLayer"
			/>
		</>
	);
};

export default PersonalData;

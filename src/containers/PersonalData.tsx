import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getUser} from '../features/UserSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';

const PersonalData: React.FunctionComponent = (): React.ReactElement => {
	const dispatch = useAppDispatch();
	const params = useParams();
	const {user} = useAppSelector((state) => state.user);

	useEffect(() => {
		dispatch(getUser(params.id || ''));
	}, []);
	return (
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
	);
};

export default PersonalData;

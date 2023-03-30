import {useEthers} from '@usedapp/core';
import React, {useState, useEffect} from 'react';
import {addUser, getUsers} from '../features/UserSlice';
import IUser from '../interfaces/IUser';
import IUserDto from '../interfaces/IUserDto';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {customAlphabet} from 'nanoid';

const nanoid = customAlphabet('1234567890', 18);

const Form: React.FunctionComponent = (): React.ReactElement => {
	const [user, setUser] = useState<IUser>({
		username: '',
		email: '',
		address: '',
	} as IUser);
	const account = useEthers();
	const dispatch = useAppDispatch();
	const {users, currentUser} = useAppSelector((state) => state.user);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({...user, [e.target.name]: e.target.value});
	};

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		await dispatch(getUsers());

		const newUser: IUserDto = {
			id: currentUser.id ? currentUser.id : parseInt(nanoid()),
			username: user.username,
			email: user.email,
			address: user.address,
		};

		dispatch(addUser(newUser));
	};

	useEffect(() => {
		setUser({...user, address: account.account || ''});
	}, [account.account]);

	return (
		<form onSubmit={handleSubmit} className="flex flex-col">
			<h2 className="text-[#E75626] text-[36px] leading-[43px]">
				Beta test registration
			</h2>
			<p className="text-[16px] leading-[19px] w-[421px] mt-[18px] font-['Montserrat'] mb-[36px]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>
			<h3 className="text-[24px] leading-[29px] caret-transparent">Name</h3>
			<input
				onChange={handleInputChange}
				className="border-[#FFFFFF] pl-[18px] pr-[116px] text-[14px] leading-[18px] border py-[12px] rounded-[30px] mt-[8px] w-[421px]"
				type="text"
				placeholder="We will display your name in participation list "
				name="username"
				required
				value={user.username}
			/>
			<h3 className="text-[24px] leading-[29px] mt-[18px] caret-transparent">
				Email
			</h3>
			<input
				onChange={handleInputChange}
				className="border-[#FFFFFF] pl-[18px] pr-[116px] text-[14px] leading-[18px] border py-[12px] rounded-[30px] mt-[8px] w-[421px] "
				type="email"
				placeholder="We will display your email in participation list "
				name="email"
				required
				value={user.email}
			/>
			<button
				disabled={account.account ? false : true}
				type="submit"
				className="uppercase text-[18px] leading-[22px] w-[148px] bg-[#E75626] px-[24px] py-[10px]  rounded-[30px] mt-[24px]"
			>
				Get early access
			</button>
		</form>
	);
};

export default Form;

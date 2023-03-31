import React from 'react';
import {useNavigate} from 'react-router-dom';
import {deleteUser, setShowUser} from '../features/UserSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';

const Listing: React.FunctionComponent = (): React.ReactElement => {
	const {users, currentUser} = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleDelete = (id: number) => {
		dispatch(deleteUser(id));
		dispatch(setShowUser());
	};

	const handleUserPage = (id: number) => {
		if (currentUser.id === id) return;
		navigate(`user/${id}`);
	};

	return (
		<>
			{users.length ? (
				<div className="flex flex-col z-50">
					<h2 className="text-[36px] leading-[43px] pb-9">
						Participation listing (enable only for participants)
					</h2>
					<table className="flex flex-col w-[700px]">
						<thead className="flex pb-4">
							<tr className="text-[24px] leading-[29px] w-[104px] mr-[83px]">
								<th className="font-normal">name</th>
							</tr>
							<tr className="text-[24px] leading-[29px] w-[104px] mr-[154px]">
								<th className="font-normal">email</th>
							</tr>
							<tr className="text-[24px] leading-[29px] w-[104px]">
								<th className="font-normal">wallet</th>
							</tr>
						</thead>
						<tbody className="flex flex-col overflow-auto h-[575px] tbody pr-7">
							{[...users].reverse().map((user) => {
								return (
									<tr
										onClick={() => handleUserPage(user.id)}
										key={user.id}
										className={`flex border-t-[1px] py-4 items-center ${
											user.id === currentUser.id ? '' : 'cursor-pointer'
										}`}
									>
										<td
											className={`${
												currentUser.id === user.id ? 'text-[#E75626]' : ''
											} font-['Montserrat'] text-[14px] leading-[18px] w-[81px] mr-[106px] text-ellipsis overflow-hidden whitespace-nowrap`}
										>
											{user.username}
										</td>
										<td
											className={`${
												currentUser.id === user.id ? 'text-[#E75626]' : ''
											} font-['Montserrat'] text-[14px] leading-[18px] w-[178px] mr-[79px] text-ellipsis overflow-hidden whitespace-nowrap`}
										>
											{user.email}
										</td>
										<td className=" font-['Montserrat'] flex items-center justify-between  w-[224px]">
											<p
												className={`${
													currentUser.id === user.id ? 'text-[#E75626]' : ''
												} font-['Montserrat'] text-[14px] leading-[18px] text-ellipsis overflow-hidden whitespace-nowrap mr-3`}
											>
												{user.address}
											</p>
											{currentUser.id === user.id ? (
												<button onClick={() => handleDelete(user.id)}>x</button>
											) : null}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			) : null}
		</>
	);
};

export default Listing;

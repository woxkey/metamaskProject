import React from 'react';
import ConnectButton from './ConnectButton';

const Header = () => {
	return (
		<div className="container mx-auto lg flex justify-between pt-3 text-xl uppercase">
			<div className="w-[200px] h-[44px] flex justify-center items-center bg-[#5A5A5A] border-[#C7C7C7] border border-dashed cursor-pointer">
				logo
			</div>
			<ConnectButton />
		</div>
	);
};

export default Header;

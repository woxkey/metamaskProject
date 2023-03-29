import React from 'react';
import {useEthers} from '@usedapp/core';

const ConnectButton = () => {
	const {activateBrowserWallet, account} = useEthers();

	const handleConnectWallet = () => {
		activateBrowserWallet();
	};

	return account ? (
		<div>{account}</div>
	) : (
		<div className="px-6 py-[10px] bg-[#E75626] rounded-[20px] z-50">
			<button className="" onClick={handleConnectWallet}>
				Connect Metamask
			</button>
		</div>
	);
};

export default ConnectButton;

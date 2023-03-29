import React from 'react';
import {useEthers} from '@usedapp/core';

const ConnectButton: React.FunctionComponent = (): React.ReactElement => {
	const {activateBrowserWallet, account} = useEthers();

	const handleConnectWallet = () => {
		activateBrowserWallet();
	};

	return account ? (
		<div className="text-[#E75626] w-[145px] text-ellipsis overflow-hidden whitespace-nowrap">
			{account}
		</div>
	) : (
		<div className="px-6 py-[10px] bg-[#E75626] rounded-[20px] z-50">
			<button onClick={handleConnectWallet}>Connect Metamask</button>
		</div>
	);
};

export default ConnectButton;

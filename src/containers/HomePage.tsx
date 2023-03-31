import React, {useState, useEffect} from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Explore from '../components/Explore';
import Form from '../components/Form';
import Listing from '../components/Listing';
import Modal from '../components/Modal';
import {useEthers} from '@usedapp/core';

const HomePage: React.FunctionComponent = (): React.ReactElement => {
	const [extension, setExtension] = useState<boolean | null>(null);
	const {activateBrowserWallet, account} = useEthers();

	useEffect(() => {
		if (window.ethereum) {
			setExtension(true);
			activateBrowserWallet();
		} else {
			setExtension(false);
		}
	}, []);
	return (
		<>
			<Explore />
			<div className="flex container mx-auto pt-[108px] pb-[339px] justify-between">
				<Form />
				<Listing />
				{!extension && <Modal />}
			</div>
		</>
	);
};

export default HomePage;

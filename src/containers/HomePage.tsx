import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Explore from '../components/Explore';
import Form from '../components/Form';
import Listing from '../components/Listing';

const HomePage: React.FunctionComponent = (): React.ReactElement => {
	return (
		<>
			<Explore />
			<div className="flex container mx-auto pt-[108px] pb-[339px] justify-between">
				<Form />
				<Listing />
			</div>
		</>
	);
};

export default HomePage;

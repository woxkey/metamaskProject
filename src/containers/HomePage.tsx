import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Explore from '../components/Explore';
import Form from '../components/Form';

const HomePage: React.FunctionComponent = (): React.ReactElement => {
	return (
		<>
			<Explore />
			<Form />
		</>
	);
};

export default HomePage;

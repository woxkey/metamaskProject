import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './containers/HomePage';
import PersonalData from './containers/PersonalData';

const App: React.FunctionComponent = (): React.ReactElement => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/user/:id" element={<PersonalData />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;

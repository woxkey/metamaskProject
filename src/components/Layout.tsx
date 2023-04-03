import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './Header';

const Layout = () => {
	return (
		<div className="myContainer">
			<Header />
			<Outlet />
		</div>
	);
};

export default Layout;

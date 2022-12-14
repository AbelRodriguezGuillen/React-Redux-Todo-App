import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AddPolicyForm from './AddPolicyForm';
import PolicyList from './PolicyList';
import PolicyItem from './PolicyItem';
import TotalSelectedItems from './TotalSelectedtems';
import { Outlet, Link } from "react-router-dom";

const About = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<span>
				<h1 className='homepage-horizon'>
					About
				</h1>
			</span>
		</div>
	);
};

export default About;
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AddPolicyForm from './AddPolicyForm';
import PolicyList from './PolicyList';
import PolicyItem from './PolicyItem';
import TotalSelectedItems from './TotalSelectedtems';
import { Link } from "react-router-dom";

const PolicyFormContainer = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<span>
				<h1 className='homepage-horizon'>
					Payment Details
				</h1>
			</span>
			<Link to='/'>
				<button className='back-btn'>
					Back
				</button>
			</Link>
			<Link to='/Checkout'>
				<button className='to-checkout-btn'>
					Checkout
				</button>
			</Link>
		</div>
	);
};

export default PolicyFormContainer;
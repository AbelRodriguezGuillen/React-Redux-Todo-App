import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AddPolicyForm from './AddPolicyForm';
import PolicyList from './PolicyList';
import PolicyItem from './PolicyItem';
import TotalSelectedItems from './TotalSelectedtems';
import { Link } from "react-router-dom";

const Checkout = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<span>
				<h1 className='homepage-horizon'>
					Checkout
				</h1>
			</span>
			<Link to='/PaymentDetails'>
				<button className='to-paymentDetails-btn'>
					Back
				</button>
			</Link>
		</div>
	);
};

export default Checkout;
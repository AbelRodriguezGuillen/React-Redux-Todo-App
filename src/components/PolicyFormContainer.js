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
				<h2 className='homepage-title'>
					My Policies
				</h2>
				{/* <AddPolicyForm /> */}
				<PolicyList />
				<PolicyItem />
				<TotalSelectedItems />
		</div>
	);
};

export default PolicyFormContainer;
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AddPolicyForm from './AddPolicyForm';
import PolicyList from './PolicyList';
import PolicyItem from './PolicyItem';
import TotalSelectedItems from './TotalSelectedtems';
import { Link } from "react-router-dom";

const Review = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<span>
				<h1 className='homepage-horizon'>
					Review
				</h1>
			</span>
		</div>
	);
};

export default Review;
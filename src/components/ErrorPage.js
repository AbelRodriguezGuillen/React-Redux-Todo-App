import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AddPolicyForm from './AddPolicyForm';
import PolicyList from './PolicyList';
import PolicyItem from './PolicyItem';
import TotalSelectedItems from './TotalSelectedtems';
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div>
		    <h3 className='Error-page'>
					The link you clicked is not currently active. Please return to the previous page and select a different link.
			</h3>
		</div>
	);
};

export default ErrorPage;
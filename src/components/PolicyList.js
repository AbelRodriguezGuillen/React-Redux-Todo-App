import React, { useEffect } from 'react';
import PolicyItem from './PolicyItem';
import { useSelector, useDispatch } from 'react-redux';
import { getPoliciesAsync } from '../redux/policySlice';

const PolicyList = () => {
	const dispatch = useDispatch();
	const policies = useSelector((state) => state.policies);
	
	// useEffect will initiate when this component loads. In this case, getTodosAsync will be dispatched.
	useEffect(() => {
		dispatch(getPoliciesAsync())
	}, [dispatch])
	
	return (
		<ul className='list-group'>
			{policies.map((policy) => (
				<PolicyItem id={policy.id} title={policy.title} completed={policy.completed} cost={policy.cost} />
			))}
		</ul>
	);
};

export default PolicyList;

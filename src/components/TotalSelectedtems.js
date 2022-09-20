import React from 'react';
import { useSelector } from 'react-redux';
// import { Button } from '@mui/material';
// import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const TotalSelectedItems = () => {
	
	// filter function returns an array
	const selectedPolicies = useSelector((state) => state.policies.filter((policy) => policy.selected === true));
	
	// const totalTodosCost = useSelector((state) => state.todos.filter((todo) => {
	// 	if(todo.completed === true){
	// 		console.log(todo.cost)
	// 		return todo.cost
	// 	}
	// }));

	// const handleSum = () => {
	// 	let sum = 0;
	// 	for (const value of totalTodosCost.length) {
	// 	sum += value;
	// 	}
	// 	return sum
	// }
	// console.log(totalTodosCost)



	return (
	<div>
		<h4 className='mt-3'>
			Total Policies Selected: { selectedPolicies.length}
			<Link to='/PaymentDetails'>
				<button className='submit-btn'>
					Submit
				</button>
			</Link>
		</h4>
		{/* <h4 className='policies-cost-sum'>
			Total Policies Cost: { handleSum }
		</h4> */}
		<h7>
			*Prices shown are billed monthly; total yearly costs may vary.
		</h7>
	</div>
	)
};

export default TotalSelectedItems;

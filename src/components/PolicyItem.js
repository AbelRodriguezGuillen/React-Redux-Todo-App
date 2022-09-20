import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelectAsync, deletePolicyAsync } from '../redux/policySlice';

const PolicyItem = ({ id, title, selected, cost }) => {
	const dispatch = useDispatch();

	const handleSelectClick = () => {
		dispatch(toggleSelectAsync({ id: id, selected: !selected }))
	}

	// const handleDeleteClick = () => {
	// 	dispatch(deletePolicyAsync({ id: id }));
	// 	window.location.reload(true);
	// }

	
	return (
		<li className={`list-group-item ${selected && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input 
					type='checkbox' 
					className='mr-3' 
					checked={ selected }
					onChange={ handleSelectClick }
					></input>
					{title}
				</span>
				<span className='cost'>
					${cost}*
				</span>
			</div>
		</li>
	);
};

export default PolicyItem;



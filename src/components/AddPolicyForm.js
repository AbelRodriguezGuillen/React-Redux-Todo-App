import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPoliciesAsync } from '../redux/policySlice';

const AddPolicyForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entered: ' + value);
		dispatch(addPoliciesAsync({
			title: value,
		}))
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Additional Policies</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add a policy...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddPolicyForm;

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import AddPolicyForm from './AddPolicyForm';
import PolicyList from './PolicyList';
import PolicyItem from './PolicyItem';
import TotalSelectedItems from './TotalSelectedtems';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'

const Login = (props) => {
    const [input, setInput] = useState("");
    const [pin, setPin] = useState("1234");
    const prevInput = useRef('')
    //console.log(props.success)


    useEffect(() => {
        prevInput.current = input
    }, [input])

function HandleSubmit(e) {
    e.preventDefault();
    if(input === pin) {
        toast.success('CORRECT PIN');
        props.success()
    }else{
        toast.error('TRY AGAIN')
    }
}

const HandleLength = (e) => {
    if (e.target.value.length >= 4){
        e.preventDefault()
    } 
}


return (
	<div className='container bg-white p-4 mt-5'>
		<span>
		<form onSubmit={HandleSubmit} id='pinForm'>
			<div>
				<label>Enter your PIN</label>
				<input type={"number"}
				value={input}
				onChange={e => setInput(e.target.value)}
				onKeyPress={HandleLength}
				required />
				<button>Submit</button>
			</div>
		</form>
		</span>
	</div>
);
};

export default Login;
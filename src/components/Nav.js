import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<nav>
				<h3>Horizon Blue</h3>
				<ul className='nav-links'>
					<Link to="/PolicyFormContainer">Home</Link>
					<Link to="/Profile">Profile</Link>
					<Link to="/About">About</Link>	
					<Link to="/MyCart">My Cart</Link>	
					<Link to="/">Logout</Link>	
				</ul> 
			</nav>
		</div>
	);
};

export default Nav;

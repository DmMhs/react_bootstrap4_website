import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../images/beerbearLogo.jpg';

class Navbar extends Component {
	render() {
		return(
		<nav className="navbar navbar-expand-md">
			<div className="container">
				  <Link className="navbar-brand" to="/"><img id="logo" src={logo}/></Link>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav ml-auto">
					  <li className="nav-item">
						<Link className="nav-link" to="/about">About<span className="sr-only">(current)</span></Link>
					  </li>
					  <li className="nav-item">
						  <Link className="nav-link" to="/contact">Contact</Link>
					  </li>
					</ul>
				  </div>
			</div>
		</nav>
		);
	}
}

export default Navbar;
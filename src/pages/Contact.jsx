import React, { Component } from 'react';
import './Contact.css';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Contact extends Component {
	render() {
		return (
		<div>
			<Navbar />
			<Jumbotron title="Contact BEERbear" subtitle="TRUE bears love BEER!"/>
			<div className="container margintop">
				<h2>Contact us</h2>
				<p>Phone number: {this.props.phone}</p>
				<p>Our adress: {this.props.adress}</p>
				<p>Direct e-mail: {this.props.mail}</p>
			</div>
			<Footer />
		</div>
		);
	}
}
export default Contact;
import React, { Component } from 'react';
import './Jumbotron.css';
import jumbotron from '../images/beer_bear.jpg';

class Jumbotron extends Component {
	render() {
		return(
		<div className="jumbotron">
        <div className="container">
          <h1 className="display-3">{this.props.title}</h1>
          <p className="lead">{this.props.subtitle}</p>
        </div>
      </div>
		);
	}
}

export default Jumbotron;
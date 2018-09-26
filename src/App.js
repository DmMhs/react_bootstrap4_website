import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';


class App extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
		  phone : "12345678"
	  };
  }
  render() {
    return (
		<Router>
			<div>
				<Route exact path='/' component={Home}/>
				<Route exact path='/about' component={About}/>
				<Route exact path='/contact' render={props => <Contact phone="+123-456-7890" adress="St. Loise, 14/2" mail="somemail@sample.com"/>}/>
			</div>		
		</Router>
    );
  }
}

export default App;

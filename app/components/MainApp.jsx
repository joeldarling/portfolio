import React, {Component, PropTypes} from 'react';
import * as Redux from 'react-redux';

//components
import Navigation from 'Navigation';
import Avatar from 'Avatar';
import Bio from 'Bio';


export default class MainApp extends Component {
	render() {
		return (
			<div>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	      <div className="app-container">
	        <h1 className="logo-name">Joel Darling</h1>
	        <Avatar/>
					<Bio/>
      	</div>
			</div>
    );
	}
}

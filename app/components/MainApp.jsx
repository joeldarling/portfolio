import React, {Component, PropTypes} from 'react';
import * as Redux from 'react-redux';
import Avatar from 'Avatar';

export default class MainApp extends Component {
	render() {
		return (
      <div className="app-container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <h1 className="logo-name">Joel Darling</h1>
        <Avatar url='poop'/>
      </div>
    );
	}
}

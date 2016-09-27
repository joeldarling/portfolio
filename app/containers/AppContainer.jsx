import React, {Component, PropTypes} from 'react';

//components
import Avatar from 'Avatar';
import Bio from 'Bio';

export default class MainAppContainer extends Component {

  render() {
    return (
			<div>
	      <div className="app-container">
	        <h1 className="logo-name">Joel Darling</h1>
	        <Avatar/>
					<Bio/>
      	</div>
			</div>
    );
  }
}

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

//components
import Avatar from 'Avatar';
import Bio from 'Bio';
import Projects from 'Projects';
import getResume from 'Resume';

export class MainAppContainer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {dispatch} = this.props;

    return (
			<div>
	      <div className="app-container">
	        <h1 className="logo-name">Joel Darling</h1>
	        <Avatar/>
					<Bio/>
          <Projects projects={getResume()}/>
      	</div>
			</div>
    );
  }
}
export default connect((state) => state)(MainAppContainer);

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

//components
import Avatar from 'Avatar';
import Bio from 'Bio';
import Projects from 'Projects';

const projects = [
  {
    id: 1,
    name: 'together',
    url: 'together.com',
    github: 'github.com',
    desc: 'A suite of web and mobile apps for enhancing the live event experience'
  },
  {
    id: 2,
    name: 'together',
    url: 'together.com',
    github: 'github.com',
    desc: 'A suite of web and mobile apps for enhancing the live event experience'
  }
];

export class MainAppContainer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {dispatch} = this.props;
    console.log(this.props);
    return (
			<div>
	      <div className="app-container">
	        <h1 className="logo-name">Joel Darling</h1>
	        <Avatar/>
					<Bio/>
          <Projects projects={projects}/>
      	</div>
			</div>
    );
  }
}
export default connect((state) => state)(MainAppContainer);

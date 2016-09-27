import React, {Component, PropTypes} from 'react';
import Project from 'Project';

export default class Projects extends Component {
  render() {

    const {projects} = this.props;

    const renderProjects = () => {
      return projects.map( project => <Project key={project.id} {...project}/> )
    }

    return (
			<div>
	      {renderProjects()}
			</div>
    );
  }
}

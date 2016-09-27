import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Project from 'Project';

import {toggleShowProject} from 'actions';


export class Projects extends Component {
  constructor(props){
    super(props);
  }

  render() {

    const {projects, showProjects, dispatch} = this.props;

    const renderProjects = () => {
      return projects.map( project => <Project key={project.id} {...project}/> )
    }

    return (
      <div>
        <h4 className="clickable-title" onClick={() => dispatch(toggleShowProject())}>Recent Projects</h4>
  			<div className="project-container">
          {showProjects ? renderProjects() : null}
  			</div>
      </div>
    );
  }
}

export default connect((state) => state)(Projects);

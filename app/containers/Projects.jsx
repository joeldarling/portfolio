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

    const renderIcon = () => {
      if(!showProjects) return <i className="fa fa-plus"></i>
      else return <i className="fa fa-minus"></i>
    }

    return (
      <div className="project-container">
        <div className="clickable-title" >
          <div onClick={() => dispatch(toggleShowProject())}>
            <h5>{renderIcon()} Recent Projects</h5>
          </div>
        </div>
  			<div className="project-list-container">
          {showProjects ? renderProjects() : null}
  			</div>
      </div>
    );
  }
}

export default connect((state) => state)(Projects);

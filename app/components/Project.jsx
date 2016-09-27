import React, {Component, PropTypes} from 'react';

export default class Project extends Component {

  render() {
    const {name, url, github, desc} = this.props;

    return (
      <div className="project">
        <h3>{name}</h3>
        <hr/>
        <p>{desc}</p>
        <a href={url}><i className="fa fa-globe fa-lg"></i></a>
        <a href={github}><i className="fa fa-github fa-lg"></i></a>
      </div>
    );
  }

}

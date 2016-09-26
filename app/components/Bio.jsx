import React, {Component, PropTypes} from 'react';

export default class Bio extends Component {
	render() {

		return (
      <div>
        <h4> <i className="fa fa-code"></i> Software Engineer </h4>
				<h5> <i className="fa fa-map-marker"></i> NYC. </h5>
        <p> Fullstack Web Developer, and also <a href="http://joeldarling.com" target="_blank">musician</a></p>
      </div>
    );
	}
}

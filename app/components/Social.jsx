import React, {Component, PropTypes} from 'react';

export default class Social extends Component {
	render() {

		return (
      <div className="social-bar">
        <ul>
          <li><a href="https://github.com/joeldarling" target="_blank"><i className="fa fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/joeldarling" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
          <li><a href="http://joeldarling.com/joeldarling_dev_resume_2017.pdf" target="_blank"><i className="fa fa-file-pdf-o"></i></a></li>
        </ul>
      </div>
    );
	}
}

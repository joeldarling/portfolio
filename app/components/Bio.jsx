import React, {Component, PropTypes} from 'react';

import Social from 'Social';

export default class Bio extends Component {
	render() {

		return (
      <div>
        <h4> <i className="fa fa-code"></i> Software Engineer at CraftOps, LLC</h4>
				<h5> <i className="fa fa-map-marker"></i> NYC </h5>
				<Social/>
      </div>
    );
	}
}

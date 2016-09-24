import React, {Component, PropTypes} from 'react';
import * as Redux from 'react-redux';

export default class Avatar extends Component {
	render() {

		const {url} = this.props;
		return (
      <div className="avatar">
        <p> {url} </p>
      </div>
    );
	}
}

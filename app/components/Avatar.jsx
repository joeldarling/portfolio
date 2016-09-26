import React, {Component, PropTypes} from 'react';

export default class Avatar extends Component {
	render() {

		const {url} = this.props;
		return (
      <div className="avatar">
        <img src="assets/avatar.jpg"></img>
      </div>
    );
	}
}

import React, {Component, PropTypes} from 'react';

export default class Navigation extends Component {
	render() {

		return (
      <div>
        <ul className="navigation">
          <li><a href="">About</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    );
	}
}

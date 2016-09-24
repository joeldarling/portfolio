const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {hashHistory} = require('react-router');

const store = require('configureStore').configure();
const actions = require('actions');
import router from 'app/router/';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
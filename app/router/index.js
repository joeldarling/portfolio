import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import MainApp from 'MainApp';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={MainApp}/>
    </Route>
  </Router>
);

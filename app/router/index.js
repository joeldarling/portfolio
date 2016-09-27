import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import MainAppContainer from 'AppContainer';

export default (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={MainAppContainer}/>
    </Route>
  </Router>
);

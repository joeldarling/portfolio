import * as redux from 'redux';
import thunk from 'redux-thunk';

import {showProjectReducer} from 'reducers';

export const configure = () => {
  const reducer = redux.combineReducers({
    showProjects: showProjectReducer
  });

  const store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};

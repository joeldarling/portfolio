import * as redux from 'redux';
import thunk from 'redux-thunk';

import {mainReducer} from 'reducers';

export const configure = () => {
  const reducer = redux.combineReducers({
    main: mainReducer
  });

  const store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};

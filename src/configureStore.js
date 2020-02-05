import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();
export default (preloadedState) => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(thunk, routerMiddleware(history))),
  );
};

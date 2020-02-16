import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';

import SearchReducer from './Search';

const createRootReducer = history => combineReducers({
  // router: connectRouter(history),
  SearchReducer,
});
export default createRootReducer;

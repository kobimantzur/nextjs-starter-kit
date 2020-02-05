import { combineReducers } from "redux";
// import { connectRouter } from 'connected-react-router';

import BusinessPageReducer from "./BusinessPage";
import SearchReducer from "./Search";

const createRootReducer = history =>
  combineReducers({
    // router: connectRouter(history),
    BusinessPageReducer,
    SearchReducer
  });
export default createRootReducer;

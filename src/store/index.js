import { createStore, combineReducers } from "redux";
import { authReducer, authReducers } from "./reducers/authreducer";

const rootReducer = combineReducers({ authReducer });

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

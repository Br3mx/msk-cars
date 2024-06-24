import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import initialState from "./initialState.js";
import detailingReducer from "./Detailing/detailingReducer";
import commonReducer from "./commonRedux.js";
const subreducers = {
  detailing: detailingReducer,
  common: commonReducer,
};

const reducer = combineReducers(subreducers);

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;

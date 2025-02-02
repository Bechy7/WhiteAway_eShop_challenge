import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { getDataMiddleware } from "../middleware";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Forward the dispatched actions to the reducer
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(getDataMiddleware, thunk))
);

export default store;
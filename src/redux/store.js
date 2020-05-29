import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
//..middleware: spread all of the values inside the middlewares array
// into this function call (applyMiddlware()) as individual arguements.

export default store;

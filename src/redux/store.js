import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {persistStore} from "redux-persist"
import rootReducer from "./root-reducer";

const middlewares = []; 

if(process.env.NODE_ENV === "development") { //using logger in development only
     middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store) // to cache the store.

// export default { store, persistor };



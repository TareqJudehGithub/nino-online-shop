import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; //to use local storage as the default storge.

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopDataReducer from "./shop_data/shop-data.reducer";

const persistConfig = {
     key: "root",
     storage,
     whitelist: ["cart"] //list of reducers we wish to store or cache.
}

const rootReducer = combineReducers({
     user: userReducer,
     cart: cartReducer,
     directory: directoryReducer,
     shop: shopDataReducer
})
export default persistReducer(persistConfig, rootReducer);

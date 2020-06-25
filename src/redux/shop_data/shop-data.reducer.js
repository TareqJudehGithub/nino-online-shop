import ShopActionTypes from "./shop-data.types";
import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
     collections: SHOP_DATA
};
const shopDataReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case ShopActionTypes.UPDATE_COLLECTIONS:
               return {
                    ...state,
                    collections: action.payload
               }
          default:
               return state;
     }
};
export default shopDataReducer;
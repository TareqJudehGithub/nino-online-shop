import ShopDataActionTypes from "./shop-data.types";
import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
     collections: SHOP_DATA
};
const shopDataReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case ShopDataActionTypes.SHOP_DATA:
               return {
                    ...state,
                    collections: [...state.collections]
               }
          default:
               return state;
     }
};
export default shopDataReducer;
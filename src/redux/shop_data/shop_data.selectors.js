import {createSelector} from "reselect";

const shopState = state => state.shop;
export const currentShop = createSelector(
     [shopState],
     shop => shop.SHOP_DATA
);
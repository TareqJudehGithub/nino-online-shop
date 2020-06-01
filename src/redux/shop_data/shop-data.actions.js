import ShopDataActionTypes from "./shop-data.types";

export const shopData = (shopItem) => ({
     type: ShopDataActionTypes.SHOP_DATA,
     payload: shopItem
});

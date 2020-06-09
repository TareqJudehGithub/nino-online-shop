import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
     [selectShop],
     shop => shop.collections
);

//display a custom collection based on it's id
export const selectCollection = collectionUrlParams => createSelector(
     [selectCollections],
     collections => collections[collectionUrlParams] 
     // collections => Object.keys(collections[collectionUrlParams]) 
);
//display all collections under /shop
export const selectCollectionsForPreview = createSelector(
     [selectCollections],
     collections => Object.keys(collections).map(key =>
          collections[key]) //get all keys, then map over that array of keys so 
     // we get the value of collection objects of that key, which will return
     //an array of items.
);

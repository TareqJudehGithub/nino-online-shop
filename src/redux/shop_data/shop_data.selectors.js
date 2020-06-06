import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
     [selectShop],
     shop => shop.collections
);
//1. collection Id map: Maps a string value, to its respective ID.
const COLLECTION_ID_MAP = {
     hats: 1,
     sneakers: 2,
     jackets: 3,
     women: 4,
     men: 5
}
//2. pass in that string from .1, and use that string in dynamic value
//of the property to get the correct ID, and then match it with our selector:

export const selectCollection = collectionUrlParam => {
     return(
          createSelector(
               [selectCollections],
               collections => collections.find(collection => {
                    return (
                         collection.id === COLLECTION_ID_MAP[collectionUrlParam]
                    )
               })
          )
     )
};
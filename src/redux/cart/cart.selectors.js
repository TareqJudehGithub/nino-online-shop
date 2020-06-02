import { createSelector } from "reselect";


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
     [selectCart], 
     cart => cart.cartItems 
);
export const selectCartHidden = createSelector(
     [selectCart],
     cart => cart.hidden
);

//Add to items to cart selector:
export const selectCartItemsCount = createSelector(
     [selectCartItems],
     cartItems => {
          return cartItems.reduce((accumilatedQuantity, cartItem) => {
               return accumilatedQuantity + cartItem.quantity
          }, 0);
     }
);

export const selectCartTotal = createSelector(
     [selectCartItems],
     cartItems => {
          return cartItems.reduce((accumilatedQuantity, cartItem) => {
               return accumilatedQuantity + cartItem.quantity * cartItem.price
          }, 0);
     }
);
import { createSelector } from "reselect";


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
     [selectCart], 
     cart => cart.cartItems 
)
export const selectCartHidden = createSelector(
     [selectCart],
     cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
     [selectCartItems],
     cartItems => {
          return cartItems.reduce((accumilatedQuantity, cartItem) => {
               return accumilatedQuantity + cartItem.quantity
          }, 0)
     }
)
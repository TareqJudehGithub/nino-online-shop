import { createSelector } from "reselect";

//input selector:  doesnt use createSelectors
//output selector: uses both input selectors and createSelectors to build it self.

//input selector: a func that takes the whole state, and returns a slice of it.

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
     [selectCart], //a collection of input selectors
     cart => cart.cartItems //a func that returns the value we want out of that selector.
)

export const selectCartItemsCount = createSelector(
     [selectCartItems],
     cartItems => {
          return cartItems.reduce((accumilatedQuantity, cartItem) => {
               return accumilatedQuantity + cartItem.quantity
          }, 0)
     }
)
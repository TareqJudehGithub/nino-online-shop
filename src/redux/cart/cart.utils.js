//Add item(s) to cart:
export const addItemToCart = (cartItems, cartItemToAdd) => {
     //returning the 1st item found matching the item we are trying to add:
     const existingCartItem = cartItems.find(cartItem => {
          return cartItem.id === cartItemToAdd.id
     });
     if(existingCartItem) {
          //if item is found inside the array, then add qty of existing item:
          return  cartItems.map(cartItem => 
               cartItem.id === cartItemToAdd.id
               ?
               {...cartItem, quantity: cartItem.quantity + 1}
               :
               cartItem      
          )
     };
     //if item is not found, then add it to the cart:
     return [...cartItems, {...cartItemToAdd, quantity: 1}]
};
//remove item(s) from cart:
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
     const existingCartItem = cartItems.find(cartItem => {
          return cartItem.id === cartItemToRemove.id
     });
//if the existing item quantity = 1, remove it:
     if (existingCartItem.quantity === 1) {
          return cartItems.filter(cartItem => 
              
               cartItem.id !== cartItemToRemove.id)      
     }
//if quantity of item is more than 1, descrease by 1:
     return cartItems.map(cartItem => {
          return cartItem.id === cartItemToRemove.id
          ?
          {...cartItem, quantity: cartItem.quantity -1 }
          :
          cartItem
     }) 
};

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

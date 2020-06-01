import React from "react";
import CartItem from "../cart-item/cart-item";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";

import Button from "@material-ui/core/Button";
import styles from "../UI/makestyles";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
     const classes = styles();

     return (
          <div className={classes.CartDropdown}>
               <div className={classes.cartItems}>
               {
                    cartItems.map(cartItem => {
                         return(
                              <CartItem 
                              key={cartItem.id}
                              cartItem={cartItem}
                              />
                         )
                    })
               }
               </div>
               <Button 
               variant="contained" 
               color="secondary"
               style={{marginTop: "auto"}}>
                    Checkout
               </Button>
          </div>
     )
}
const mapStateToProps = (state) => ({
cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
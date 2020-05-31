import React from "react";
import Button from "@material-ui/core/Button";
import styles from "../UI/makestyles";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
     const classes = styles();
     return (
          <div className={classes.CartDropdown}>
               <div className={classes.cartItems}/>
               <Button 
               variant="contained" 
               color="secondary"
               style={{marginTop: "auto"}}>
                    Checkout
               </Button>
          </div>
     )
}
export default CartDropdown;
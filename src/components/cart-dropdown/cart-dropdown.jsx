import React from "react";
import CartItem from "../cart-item/cart-item";
import {withRouter} from "react-router-dom";
//redux:
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {createStructuredSelector} from "reselect";

//styles:
import Button from "@material-ui/core/Button";
import styles from "../UI/makestyles";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
     const classes = styles();

     return (
          <div className={classes.CartDropdown}>
               <div className={classes.cartItems}>
               {
                    cartItems.length
                    ?
                    (
                         cartItems.map(cartItem => {
                              return(
                                   <CartItem 
                                   key={cartItem.id}
                                   cartItem={cartItem}
                                   />
                              )
                         })
                    )
                    : 
                    (
                         <span className={classes.emptyMsg}>Cart is empty</span>
                    )
               }
               </div>
               {
                    cartItems.length
                    ?
                    <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={() => {
                         history.push("/checkout");
                         dispatch(toggleCartHidden())
                    }}
                    style={{marginTop: "auto"}}>
                         Checkout
                    </Button>
                    :
                    <Button
                    disabled 
                    variant="contained" 
                    color="secondary"
                    onClick={() => {
                         history.push("/checkout");
                         dispatch(toggleCartHidden())
                    }}
                    style={{marginTop: "auto"}}>
                         Checkout
                    </Button>
               }
          </div>
     )
}
const mapStateToProps = createStructuredSelector({
cartItems: selectCartItems
});
// const mapStateToDispatch = dispatch => ({

// })

export default withRouter(connect(mapStateToProps)(CartDropdown));
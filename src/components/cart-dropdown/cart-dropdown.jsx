import React from "react";
import CartItem from "../cart-item/cart-item";
import {withRouter} from "react-router-dom";
//redux:
import {connect} from "react-redux";
import {selectCartItems, selectCartTotal, selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {createStructuredSelector} from "reselect";

//styles:
import Button from "@material-ui/core/Button";
import styles from "./cart-dropdown.styles";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, cartTotal, itemsCount, history, dispatch }) => {
     const classes = styles();

     return (
          <div className={classes.CartDropdown}
          onMouseLeave={() => dispatch(toggleCartHidden())}>
               <div style={{textAlign: "center"}}>
               {
                    cartItems.length
                    ?
                    (
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
                    <div className={classes.cartFooter}>
                         {
                              itemsCount  <= 1
                              ?
                              `Total: (${itemsCount} item) $${cartTotal}`
                              :
                              `Total: (${itemsCount} items) $${cartTotal}`
                         }
                         
                         <Button 
                         className={classes.cartBtn}
                         variant="contained" 
                         color="secondary"
                         onClick={() => {
                              history.push("/checkout");
                              dispatch(toggleCartHidden())
                         }}
                         style={{marginTop: "auto"}}>
                              Checkout
                         </Button>
                    </div>
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
cartItems: selectCartItems,
cartTotal: selectCartTotal,
itemsCount: selectCartItemsCount
});
// const mapStateToDispatch = dispatch => ({

// })

export default withRouter(connect(mapStateToProps)(CartDropdown));
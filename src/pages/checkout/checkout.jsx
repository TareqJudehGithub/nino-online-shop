import React from "react";
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";
import {Link} from "react-router-dom";
//redux:
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
          selectCartItems, selectCartTotal, selectCartItemsCount
     } from "../../redux/cart/cart.selectors";
import { selectCurrentUsers } from "../../redux/user/user.selectors";
import "./checkout.styles.scss";
import { Button } from "@material-ui/core";

const CheckoutPage = ({ cartItems, cartTotal, itemCount, currentUser }) => {
     
     return(
         
          <div className="checkout-page">
                <h2 className="checkout-title">Shopping Cart</h2>
               <div className="checkout-header">
                    <div className="header-block">
                         <span>Product</span>
                    </div>
                    <div className="header-block">
                         <span>Description</span>
                    </div>
                    <div className="header-block">
                         <span>Quantity</span>
                    </div>
                    <div className="header-block">
                         <span>Price</span>
                    </div>
                    <div className="header-block">
                         <span>Remove</span>
                    </div>
               </div>
               {
                    //checkout items 
                    cartItems.length
                    ?
                    cartItems.map(cartItem => {
                         return (
                             
                              <CheckoutItem 
                              key={cartItem.id}
                              cartItem={cartItem} //passing cartItem prop to checkout-item comp.
                              />      
                         )          
                    })
                    :
                    <h3>Your shopping cart is empty</h3>
               }
               <div className="checkout-total">
                    <span className="total">
                         {
                              itemCount === 0 && cartTotal <= 0
                              ?
                              null
                              :
                              itemCount === 1 
                              ?
                              `Total: (${itemCount} item): $${cartTotal}`
                              :
                              `Total: (${itemCount} items): $${cartTotal}`
                         } 
                    </span>
                    {
                    currentUser
                    ?
                    (
                         <div>
                              <span className="stripe"><StripeCheckoutButton /></span>
                              <Button
                                   style={{padding: " 0.25em 1.1em",
                                   marginTop: "0.5em"}} variant="contained" color="secondary">
                                   <Link to="/" style={{color: "white"}}
                              >
                                   Cash on Delivery</Link>     
                              </Button>
                         </div>
                    )
                    :
                         <div>
                         <h4>
                              Please <Link 
                              to="/signin"
                              style={{color:"orange"}}>Sign in</Link> to continue
                         with your order. 
                         </h4>
                         </div>
                    }
{/*                     
                    <span className="stripe"><StripeCheckoutButton /></span>
                    <Button
                         style={{padding: " 0.25em 1.1em"}} variant="contained" color="secondary">
                         <Link to="/" style={{color: "white"}}
                         >
                              Cash on Delivery</Link>     
                    </Button> */}
{/*  
                    <div className="test-warning">
                         <ul>
                              <li>CR info for payments:</li>
                              <li>CR#: 4242 4242 4242 4242</li>
                              <li>exp date: 12/22</li>
                         </ul>
                    </div> */}
                           
               </div>
               
          </div>
     )
}
const mapStateToProps = createStructuredSelector({
     cartItems: selectCartItems,
     cartTotal: selectCartTotal,
     itemCount: selectCartItemsCount,
     currentUser: selectCurrentUsers
});

export default connect(mapStateToProps)(CheckoutPage);
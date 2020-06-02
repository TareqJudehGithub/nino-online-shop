import React from "react";
import CheckoutItem from '../../components/checkout-item/checkout-item';
//redux:
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
          selectCartItems, selectCartTotal, selectCartItemsCount
     } from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, cartTotal, itemCount }) => {
     return(
         
          <div className="checkout-page">
                <h2 className="checkout-title">Checkout Page</h2>
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
                    cartItems.map(cartItem => {
                         return (
                              <CheckoutItem 
                              key={cartItem.id}
                              cartItem={cartItem} //passing cartItem prop to checkout-item comp.
                              />
                         )
                    })
               }
               <div className="total">
                    <span>Total: {itemCount} item(s) ${cartTotal}</span>
               </div>
          </div>
     )
}
const mapStateToProps = createStructuredSelector({
     cartItems: selectCartItems,
     cartTotal: selectCartTotal,
     itemCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CheckoutPage);
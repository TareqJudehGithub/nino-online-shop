import React from "react";
import CheckoutItem from '../../components/checkout-item/checkout-item';
import {Redirect} from "react-router-dom"
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
                    <Redirect to="/"/>
               }
               <div className="total">
                    <span>
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
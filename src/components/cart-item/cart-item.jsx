import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {connect} from "react-redux";
import {clearItemFromCart} from "../../redux/cart/cart.actions";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem, removeItem }) => {
     const { imageUrl, price, name, quantity } = cartItem;
     return (
          <div className="cart-item">
               <img src={imageUrl} alt="item" />
               <div className="item-details">
                    <span className="name">{name}</span>
                    <span className="price">{quantity} x ${price}</span>
               </div>
               <div className="btn-remove" onClick={() => removeItem(cartItem)}>
                    <DeleteIcon color="secondary"/>
               </div>
          </div>
     )
}
const mapDispatchToProps = dispatch => ({
     removeItem: item => dispatch(clearItemFromCart(item))
})
export default connect(null, mapDispatchToProps)(CartItem);
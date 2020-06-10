import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {connect} from "react-redux";
import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";
import "./cart-item.styles.scss";

const CartItem = ({
      cartItem, increaseQty, decreaseQty, clearItem //cartitem prop from cart=dropdown
      }) => { 
     const { imageUrl, price, name, quantity } = cartItem;
     return (
          <div className="cart-item">
               <img src={imageUrl} alt="item" />
               <div className="item-details">
                    <span className="name">{name}</span>
                    <div className="change-qty"> 

                         <span className="arrow"
                          onClick={() => decreaseQty(cartItem)}
                         >
                              &#10094;
                         </span>
                         <span className="item-qty">
                              {quantity}
                         </span>
                         <span className="arrow"
                          onClick={() => increaseQty(cartItem)}
                          > 

                          &#10095;
                          </span>

                         <span className="price">${price}</span>
                         <span className="btn-remove" 
                         onClick={() => clearItem(cartItem)}
                         >
                         <DeleteIcon color="secondary" fontSize="small"/>
                    </span>
                    </div>    
               </div>
              
          </div>
     )
}
const mapDispatchToProps = dispatch => ({
     clearItem: item => dispatch(clearItemFromCart(item)),
     increaseQty: item => dispatch(addItem(item)),
     decreaseQty: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CartItem);
import React from "react";
import {connect} from 'react-redux';
import { 
     clearItemFromCart, addItem, removeItem 
} from "../../redux/cart/cart.actions";
import DeleteIcon from "@material-ui/icons/Delete";
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem , clearItem, addItem, removeItem }) => { //cartItem prop from checkout.jsx
     const {imageUrl, name, quantity, price} = cartItem;
     return(
               <div className="checkout-item">     
                    <div className="image-container">
                         <img src={imageUrl} alt="item" />
                    </div>             
                    <span className="name">{name}</span>
                    <div className="quantity">
                         <span 
                         className="arrow"
                         onClick={() => removeItem(cartItem)}
                         >
                              &#10094;
                         </span>
                         <span className="value">{quantity}</span>
                         <span 
                         className="arrow"
                         onClick={() => addItem(cartItem)}>
                              &#10095;
                         </span>
                    </div>
                    <span className="price">${price}</span>
                    <span className="remove-button"
                    onClick={() => clearItem(cartItem)} //removes selected item from cart.
                    >
                         <DeleteIcon color="secondary" fontSize="small"/>
                    </span>  
               </div>   
         
     )
}

const mapDispatchToProps = dispatch => ({
     clearItem: item => dispatch(clearItemFromCart(item)),
     addItem: item => dispatch(addItem(item)),
     removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);


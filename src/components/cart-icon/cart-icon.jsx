import React from 'react';

import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
// import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping.icon.svg';
import ShopCart from "@material-ui/icons/ShoppingCartOutlined";
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => {
     return(
          <div 
          className="cart-icon"
          onClick={() => toggleCartHidden()}
          >
               <ShopCart />
               {/* <ShoppingIcon className="shopping-icon"/> */}
               <span className="item-count">0</span>
          </div>
     )
}
const mapDispatchtoProps = (dispatch) => ({
     toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchtoProps)(CartIcon);

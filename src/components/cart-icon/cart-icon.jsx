import React from 'react';

//redux:
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
// import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping.icon.svg';
import ShopCart from "@material-ui/icons/ShoppingCartOutlined";
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
     return(
          <div 
          className="cart-icon"
          onClick={() => toggleCartHidden()}
          >
               <ShopCart />
               {/* <ShoppingIcon className="shopping-icon"/> */}
               <span className="item-count">{itemCount}</span>
          </div>
     )
}
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});
     
const mapDispatchtoProps = (dispatch) => ({
     toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchtoProps)(CartIcon);

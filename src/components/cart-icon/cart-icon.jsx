import React from 'react';

//redux:
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

import ShopCart from "@material-ui/icons/ShoppingCartOutlined";
import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, dispatch }) => {
     return(
          <div 
          className="cart-icon"
          onClick={() => dispatch(toggleCartHidden())}
         
          >
               <ShopCart />
               {/* <ShoppingIcon className="shopping-icon"/> */}
               <span className="item-count">
                    {
                         itemCount <= 0 ? null : itemCount
                    }
                    
               </span>
          </div>
     )
}
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});
     
// const mapDispatchtoProps = (dispatch) => ({
//      toggleCartHidden: () => dispatch(toggleCartHidden())
// });

export default connect(mapStateToProps)(CartIcon);

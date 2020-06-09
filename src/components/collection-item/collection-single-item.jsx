import React from "react";
import {connect} from "react-redux";
import {addItem, removeItem} from "../../redux/cart/cart.actions";
import {selectCartItemsCount, selectCartItems} from "../../redux/cart/cart.selectors";
import Button from "@material-ui/core/Button";
import './collection-item.scss';
import { createStructuredSelector } from 'reselect';

const CollectionSingleItem = ({ cartItem, dispatch, itemcount, collectionItem}) => {
     
     const { quantity } = cartItem;
     return(
          <div className="item-qty" color="secondary" 
                    style={{cursor: "none"}}
                >

                         {
                              itemcount === 0
                              ?
                              <Button className="arrow"
                              onClick={() => {
                                   dispatch(removeItem(collectionItem))
                              }}
                              disabled
                              
                              >         
                                   &#10094;
                              </Button>
                              :
                              <Button className="arrow"
                              onClick={() => {
                                   dispatch(removeItem(collectionItem))
                              }}
                              disableRipple
                              >         
                                   &#10094;
                              </Button>
                         }
                                             
                         <div className="qty">        
                        {quantity}
                         </div>
                    
                         <Button className="arrow"
                         onClick={() => {
                              dispatch(addItem(collectionItem))
                         }}
                         disableRipple
                         > &#10095;
                         </Button>
                    </div> 
     )
}
const mapStateToProps = createStructuredSelector({
     itemcount: selectCartItemsCount,
     cartItems: selectCartItems
});
export default connect(mapStateToProps)(CollectionSingleItem);
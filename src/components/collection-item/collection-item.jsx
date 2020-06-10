import React from 'react';

//redux
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";
import {selectCartItemsCount, selectCartItems} from "../../redux/cart/cart.selectors";
import Button from "@material-ui/core/Button";
import './collection-item.scss';
import { createStructuredSelector } from 'reselect';


const CollectionItem = ({collectionItem, dispatch }) => {
     
     const { name, price, imageUrl } = collectionItem;
     
     return (
          <div className="collection-item">
               <div className="image"
                    style={{backgroundImage: `url(${imageUrl})`
                    }}
               />

               <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
               </div>  
               <div className="add-to-cart">
                    {/* <div className="item-qty" color="secondary" 
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
                         {
                              cartItems.length
                              ?
                              cartItems.map(cartItem =>
                                   <SingleCollection 
                                   key={cartItem.id}
                                   cartItem={cartItem}
                                   />
                                   )
                              :
                              null
                              
                         }
                         </div>
{/*                     
                         <Button className="arrow"
                         onClick={() => {
                              dispatch(addItem(collectionItem))
                         }}
                         disableRipple
                         > &#10095;
                         </Button>
                    </div>         */}
                         <Button size="small"
                         className="btn" 
                         variant="contained" 
                         color="secondary"
                         onClick={() =>  dispatch(addItem(collectionItem))}
                         >
                         Add to cart
                         </Button>             
               </div>
               
          </div>
     )
}
const mapStateToProps = createStructuredSelector({
     itemcount: selectCartItemsCount,
     cartItems: selectCartItems
});
export default connect(mapStateToProps)(CollectionItem);

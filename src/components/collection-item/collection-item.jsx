import React from 'react';

//redux
import {connect} from "react-redux";
import {addItem, removeItem} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import Button from "@material-ui/core/Button";
import './collection-item.scss';
import { createStructuredSelector } from 'reselect';

const CollectionItem = ({collectionItem, itemcount, dispatch}) => {
     
     const { name, price, imageUrl } = collectionItem;

     return (
          <div className="collection-item">
               <div className="image"
                    style={{backgroundImage: `url(${imageUrl})`
                    }}/>
               <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
               </div>  
               <div className="add-to-cart">
                    <Button className="item-qty" color="secondary">
                         {
                              itemcount <= 0
                              ?
                              <span>&#10094;</span>
                              :
                              <span className="arrow"
                              onClick={() => {
                                   dispatch(removeItem(collectionItem))
                                  
                              }}
                              >         
                                   &#10094;
                              </span>
                         }        
                                     
                              <div className="qty">        
                               
                              </div>
                        
                         <span className="arrow"
                         onClick={() => {
                              dispatch(addItem(collectionItem))
                           
                              
                         }}
                         > &#10095;
                         </span>
                    </Button>        
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
     itemcount: selectCartItemsCount
});
export default connect(mapStateToProps)(CollectionItem);

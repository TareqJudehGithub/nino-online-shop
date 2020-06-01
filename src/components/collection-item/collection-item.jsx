import React from 'react';
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";
import Button from "@material-ui/core/Button";
import './collection-item.scss';

const CollectionItem = ({collectionItem, addItem}) => {
     const { name, price, imageUrl } = collectionItem;
     return (
          <div className="collection-item">
               <div className="image"
                    style={{
                         backgroundImage: `url(${imageUrl})`
                    }}/>
               <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
               </div> 
               <Button 
               className="btn" 
               variant="contained" 
               color="secondary"
               onClick={() => addItem(collectionItem)}
               >
                    Add to cart     
               </Button>    
          </div>
     )
}
const mapDispatchToProps = (dispatch) => ({
     addItem: itemProp => dispatch(addItem(itemProp)) 
});

export default connect(null, mapDispatchToProps)(CollectionItem);

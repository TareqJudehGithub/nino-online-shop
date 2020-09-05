import React from "react";
import CollectionItem from '../collection-item/collection-item';
import "./collection-preview.scss";

const CollectionPreview = ({ shopItem }) => {  //passed from collection-overview
     const {title, items} = shopItem;
     return (
          <div className="collection-preview">
               <h1 className="title">{title.toUpperCase()}</h1>
               <div className="preview">
                    {
                         items
                         .slice(0, 4) //OR .filter((item, index) => index < 4)
                         .map((item) => {
                              return(
                                   <CollectionItem 
                                        key={item.id}
                                        collectionItem={item} //passing the whole items
                                   />
                              )          
                         })
                    }      
               </div>
          </div>
     )
}

export default CollectionPreview;
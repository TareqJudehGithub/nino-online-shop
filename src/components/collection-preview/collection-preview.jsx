import React from "react";
import CollectionItem from '../collection-item/collection-item';


import "./collection-preview.scss";


const CollectionPreview = ({title, items}) => {
     return (
          <div className="collection-preview">
               <h1 className="title">{title.toUpperCase()}</h1>
               <div className="preview">
                    {
                         items
                         .slice(0, 4) //OR .filter((item, index) => index < 4)
                         .map(({id, ...OtherItemProps}) => {
                              return(
                                   <CollectionItem 
                                        key={id}
                                        {...OtherItemProps}
                                   />
                              )
                              
                         })
                    }
               </div>

          </div>
     )
}
export default CollectionPreview;
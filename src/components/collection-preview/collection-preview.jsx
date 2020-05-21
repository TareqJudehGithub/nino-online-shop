import React from "react";

import "./collection-preview.scss";

const CollectionPreview = ({title, items}) => {
     return (
          <div className="collection-preview">
               <h1 className="title">{title.toUpperCase()}</h1>
               <div className="preview">
                    {
                         items
                         .slice(0, 4) //OR .filter((item, index) => index < 4)
                         .map(item => {
                              return(
                                   <div key={item.id}>{item.name}</div>
                              )
                              
                         })
                    }
               </div>

          </div>
     )
}
export default CollectionPreview;
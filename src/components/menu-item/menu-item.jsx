import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ directoryItems, history, match }) => {  
     const { title, imageUrl, size, linkUrl } = directoryItems
     return (
          <div 
          className={`${size} menu-item`}
          onClick={() => history.push(`${match.path}${linkUrl}`)} //.path pr .url
          >
               <div
               className="background-image"
               style={{
               backgroundImage: `url(${imageUrl})`
          }} />  
               {/*text box on every menu item */}
               <div className="content">
               <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
               </div>
          </div>
     )
}

export default withRouter(MenuItem);
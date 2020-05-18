import React from "react";
import MenuItem from "../menu-item/menu-item";

import "./directory.styles.scss";

class Directory extends React.Component {

     constructor(){
          super();
          this.state = {
               sections: [
                    {
                         title: 'womens',
                         imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                         size: 'large',
                         id: 1,
                         linkUrl: 'shop/womens'
                    },
                    {
                         title: 'mens',
                         imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                         size: 'large',
                         id: 2,
                         linkUrl: 'shop/mens'
                    },
                    {
                         title: 'sneakers',
                         imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                         id: 3,
                         linkUrl: 'shop/sneakers',
                         size: "large"
                    },
                    {
                         title: 'jackets',
                         imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                         id: 4,
                         linkUrl: 'shop/jackets',
                         size: "large"
                    },
                    {
                         title: 'hats',
                         imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                         id: 5,
                         linkUrl: 'shop/hats',
                         size: "large"
                    }        
               ]
          };
     };
     render() {
          return(
               <div className="directory-menu">
                    {
                         this.state.sections.map(({id, title, imageUrl, size}) => {
                              return (
                                   <MenuItem 
                                   key={id}
                                   id={id}
                                   title={title}
                                   imageUrl={imageUrl}
                                   size={size}
                                   />
                              )
                         })
                    }
               </div>
          )
     }

}
export default Directory;
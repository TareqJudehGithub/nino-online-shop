import React from "react";
import MenuItem from "../menu-item/menu-item";

import "./directory.styles.scss";

class Directory extends React.Component {

     constructor(){
          super();
          this.state = {
               sections: [
                    {
                         title: 'women',
                         imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                         size: 'large',
                         id: 1,
                         linkUrl: 'women'
                    },
                    {
                         title: 'men',
                         imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                         size: 'large',
                         id: 2,
                         linkUrl: 'men'
                    },
                    {
                         title: 'sneakers',
                         imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                         id: 3,
                         linkUrl: 'sneakers',
                         size: "large"
                    },
                    {
                         title: 'jackets',
                         imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                         id: 4,
                         linkUrl: 'jackets',
                         size: "large"
                    },
                    {
                         title: 'hats',
                         imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                         id: 5,
                         linkUrl: 'hats',
                         size: "large"
                    }        
               ]
          };
     };
     
     render() {
          return(
               <div className="directory-menu">
                    {
                         this.state.sections
                         .map(directoryItems => {
                              return (
                                   <MenuItem 
                                   key={directoryItems.id}
                                   directoryItems={directoryItems}
                                   />
                              )
                         })
                    }
               </div>
          )
     }

}
export default Directory;
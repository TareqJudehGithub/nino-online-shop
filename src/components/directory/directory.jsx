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
                         linkUrl: ''
                    },
                    {
                         title: 'mens',
                         imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                         size: 'large',
                         id: 2,
                         linkUrl: ''
                    },
                    {
                         title: 'sneakers',
                         imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                         id: 3,
                         linkUrl: '',
                         size: "large"
                    },
                    {
                         title: 'jackets',
                         imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                         id: 4,
                         linkUrl: '',
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
                         .map(({id, ...otherSectionProps}) => {
                              return (
                                   <MenuItem 

                                   key={id}
                                   {...otherSectionProps}
                                   // id={id}
                                   // title={title}
                                   // imageUrl={imageUrl}
                                   // size={size}
                                   // linkUrl={linkUrl}
                                   />
                              )
                         })
                    }
               </div>
          )
     }

}
export default Directory;
import React from "react";
// import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import {connect} from "react-redux";

class ShopPage extends React.Component {
     constructor() {
          super()
          this.state = {
               // collections: SHOP_DATA
          }
     }
     render() {

          const { collections } = this.props;
          return(
               <div className="shop=page">
                   {
                    collections.map(({id, ...otherCollectionProps}) => {
                         return (
                              <CollectionPreview                     
                              key={id}
                              {...otherCollectionProps}
                         />
                         )
                         
                    })
                   }
               </div>
          )
     }
}
const mapStateToProps = ({shop: {SHOP_DATA}}) => ({
     collections: SHOP_DATA
});
export default connect(mapStateToProps)(ShopPage);
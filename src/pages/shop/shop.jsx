import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
//redux:
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {currentShop} from "../../redux/shop_data/shop_data.selectors";


class ShopPage extends React.Component {
    
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
const mapStateToProps = createStructuredSelector({
     collections: currentShop
});
export default connect(mapStateToProps)(ShopPage);
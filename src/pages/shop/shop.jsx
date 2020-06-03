import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
//redux:
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {currentShop} from "../../redux/shop_data/shop_data.selectors";
import './shop.scss';

class ShopPage extends React.Component {
    
     render() {

          const { collections } = this.props;
          return(
               <div className="shop-page">
                   {
                    collections.map((shopItem) => {
                         return (
                              <CollectionPreview                     
                              key={shopItem.id}
                              shopItem={shopItem}
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
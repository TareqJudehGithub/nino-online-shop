import React from "react";
import CollectionPreview from "../collection-preview/collection-preview";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop_data/shop_data.selectors";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
     return(
          <div className="collection-overview">
               {
                    collections.map(shopItem => {
                         return(
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

const mapStateToProps = createStructuredSelector({
collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
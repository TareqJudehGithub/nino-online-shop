import React from "react";
import {connect} from "react-redux";

import {selectCollection} from "../../redux/shop_data/shop_data.selectors";
// import CollectionItem from "../../components/collection-item/collection-item";


import "./collection.styles.scss"

const CollectionPage = ({ collection }) => { 
     console.log(collection)
     // console.log(match.params.collectionId);
     // console.log(match);
     return (
          <div className="collection-page">
               <h2>Category Page</h2>
          </div>
     )
}
const mapStateToProps = (state, ownProps) => ({
     collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);
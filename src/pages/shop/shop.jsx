import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection/collection";

import {Route} from "react-router-dom";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.util";
// redux
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop_data/shop-data.actions";
import './shop.scss';


class ShopPage extends React.Component  {
     
     // Fetching collections/documents from Firebase into the front-end:
     unsubscribeFromSnapshot = null;

     componentDidMount() {
          const { updateCollections } = this.props;

          const collectionRef = firestore.collection("collections"); // "collections" is the title in Firebase.

               collectionRef.onSnapshot(async snapshot => {
               const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
               updateCollections(collectionsMap);
               });
     }

     render() {
          const { match } = this.props
          return (
               <div className="shop-page">

                    <Route exact path={`${match.path}`} component={CollectionOverview}/>  { /* /shop */}

                    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>   { /* /shop/:collection */}

               </div>
          )
     }   
}
const mapDispatchtoProps = dispatch => ({
     updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchtoProps)(ShopPage);
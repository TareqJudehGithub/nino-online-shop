import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection/collection";

import {Route} from "react-router-dom";

import './shop.scss';


const ShopPage = ({ match }) => {
     
          return(
               <div className="shop-page">

                    <Route exact path={`${match.path}`} component={CollectionOverview}/>  { /* /shop */}

                    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>   { /* /shop/:collection */}

               </div>
          )
     }
export default ShopPage;
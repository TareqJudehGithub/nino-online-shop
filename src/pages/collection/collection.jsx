import React from "react";
import {connect} from "react-redux";
// import {} from "react-router-dom"
import {selectCollection} from "../../redux/shop_data/shop_data.selectors";
import CollectionItem from "../../components/collection-item/collection-item";


import "./collection.styles.scss"

const CollectionPage = ({ collection, history }) => { //CollectionPage displays a certain category.

     const { title, items } = collection;
     
     return (
       
          <div className="collection-page">
               <h2 className="title">{title}</h2>
               <div className="items">
               {
                    items.map(item => {
                         return(
                              <CollectionItem 
                              key={item.id}
                              collectionItem={item}
                              />
                         )
                    })
               }
               </div>           
          </div>
     )
}
const mapStateToProps = (state, ownProps) => ({
     collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);
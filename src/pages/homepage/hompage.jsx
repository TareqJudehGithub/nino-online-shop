import React from "react";
import Directory from "../../components/directory/directory";
// import MenuItem from "../../components/menu-item/menu-item";
// import {Route} from "react-router-dom";

import "./hompage.scss";

const HomePage = ({match}) => {
   
     return (
          <div className="homepage">     
               <h1>Homepage</h1>    
               {/* <Route exact path={match.path} component={Directory}/>
               <Route path={`${match.path}/:menuId`} component={MenuItem}/> */}
                    <Directory />
          </div>
     )
}
export default HomePage;
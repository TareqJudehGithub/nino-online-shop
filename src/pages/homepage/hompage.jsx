import React from "react";
import Directory from "../../components/directory/directory";

import "./hompage.scss";

const HomePage = () => {
   
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
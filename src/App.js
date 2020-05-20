import React from 'react';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/homepage/hompage";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={() => <div>Hats Page</div>}/>
      </Switch>
      
    </div>
  );
}

export default App;

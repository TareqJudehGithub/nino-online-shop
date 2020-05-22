import React from 'react';
import {Switch, Route} from "react-router-dom";
import Header from "./components/UI/header";
import HomePage from "./pages/homepage/hompage";
import ShopPage from "./pages/shop/shop";

import { ThemeProvider } from '@material-ui/core';
import theme from "./components/UI/theme/theme";
// import Shop from "./pages/shop/shop_practice";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/women" component={() => <div>Women page</div>} />
          <Route path="/men" component={() => <div>Men page</div>} />
          <Route path="/sneakers" component={() => <div>Sneakers page</div>} />
          <Route path="/jackets" component={() => <div>Jackets page</div>} />
        </Switch>   
      </div>
    </ThemeProvider>
  );
}

export default App;

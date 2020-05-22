import React from 'react';
import {Switch, Route} from "react-router-dom";
import Header from "./components/UI/header";
import HomePage from "./pages/homepage/hompage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignOutPage from "./pages/sign-in-sign-up/sign-in-sign-up";

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
          <Route path="/signin" component={SignInAndSignOutPage}/>
          <Route path="/orders" component={() => <h1>Orders Page</h1>}/>
        </Switch>   
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import {Switch, Route} from "react-router-dom";
import Header from "./components/UI/header";
import HomePage from "./pages/homepage/hompage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignOutPage from "./pages/sign-in-sign-up/sign-in-sign-up";
import {auth} from "./firebase/firebase.util";

//material UI imports:
import { ThemeProvider } from '@material-ui/core';
import theme from "./components/UI/theme/theme";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  };

  //to close any open subscription:
  unsubscribeFromAuth = null;

  componentDidMount() {
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user);
    });
  }
    componentWillUnmount() {
    //closing any open auth subscription:
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header currentUser={this.state.currentUser}/> 
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
  
}

export default App;

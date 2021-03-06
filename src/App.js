import React from 'react';
//React components:
import Header from "./components/UI/header/header";
import Footer from "./components/UI/footer/footer";
import HomePage from "./pages/homepage/hompage";
import ShopPage from "./pages/shop/shop";
import CheckoutPage from "./pages/checkout/checkout";
import SignInAndSignOutPage from "./pages/sign-in-sign-up/sign-in-sign-up";

import {Switch, Route, Redirect} from "react-router-dom";
import {auth, createUserProfileDocument} from "./firebase/firebase.util";

//material UI imports:
import { ThemeProvider } from '@material-ui/core';
import theme from "./components/UI/theme/theme";

//redux imports:
import { connect } from 'react-redux';
import {setCurrentUser} from "./redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import {selectCurrentUsers} from "./redux/user/user.selectors";


class App extends React.Component {

  //to close any open subscription:
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    
      if (userAuth) {
      //user login
        const userRef = await createUserProfileDocument(userAuth);
       
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
      });
      }

    //user logout
      setCurrentUser(userAuth);

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
          <Header /> 
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route path="/checkout" component={CheckoutPage}/>
            <Route exact path="/signin" render={() =>
              this.props.currentUser 
              ? 
              (
                <Redirect to="/"/>
              )
              :
              (
                <SignInAndSignOutPage />
              )
              }/> 
          </Switch> 
          <Footer />  
        </div>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUsers,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

 

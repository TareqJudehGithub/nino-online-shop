import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Header from "./components/UI/header";
import HomePage from "./pages/homepage/hompage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignOutPage from "./pages/sign-in-sign-up/sign-in-sign-up";
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
        </div>
      </ThemeProvider>
    );
  }
}
// const mapStateToProps =({ user }) => ({
//   currentUser: user.currentUser
// })
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUsers
})
const mapDispatchToProps = (dispatch) => ({
  //whatever object we passing to dispatch, is goin to be an action object, redux
  //passes to every reducer.
  setCurrentUser: user => dispatch(setCurrentUser(user))  //invoking setCurrentuser
  //with the payload from the user.reducer.  object returning an action object.
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

 

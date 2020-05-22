import React from "react";
import {Link} from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/images/ninos-logo.svg";
import {AppBar, Toolbar, Tab, Tabs, Menu, MenuItem, Button} from '@material-ui/core/';

import styles from "./makestyles";

// import './header.scss';


const Header = () => {

     const classes = styles();

     return (

          <React.Fragment>
               <AppBar position="fixed" color="secondary">
                    <Toolbar disableGutters>
                         <Button
                         disableRipple
                         component={Link} to="/"
                         >
                              <Logo /> 
                         </Button>
                         <Tabs className={classes.tabContainer}>
                              <Tab 
                              className={classes.tab}
                              component={Link} to="/shop"
                              label="Shop"
                              />   
                               <Tab 
                              
                              className={classes.tab}
                              component={Link} to="/"
                              label="Home"
                              />                   
                         </Tabs>
                    </Toolbar>
               </AppBar>
               <div className={classes.toolbarMargin}/>
          </React.Fragment>
          // <div className="header">
          //      <Link 
          //      className="logo-container"
          //      to="/">
          //          <Logo className="logo"/>
          //      </Link>
          //      <div className="options">
          //           <Link className="option" to="/shop">Shop</Link>
          //           <Link className="option" to="/contact">Contact</Link>
          //           <Link className="option" to="/about">About</Link>
          //      </div>
          // </div>
     )
}
export default Header;
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
// import { ReactComponent as Logo} from "../../assets/images/ninos-logo.svg";
import Logo from "../../assets/images/ninos-logo.svg"

//Material-UI imports:
import {
     AppBar, Toolbar, Tab, Tabs,
     //  Menu, MenuItem,
     Button,
     useMediaQuery,
     SwipeableDrawer,
     List, ListItem, ListItemText, IconButton
     } from '@material-ui/core/';
import {useTheme} from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu"

import styles from "./makestyles";

// import './header.scss';


const Header = () => {

     const classes = styles();

//states:
     //tabs state:
     const [value, setValue] = useState(false);

     //Drawer state:
     const [openDrawer, setopenDrawer] = useState(false);

//methods:
     //tabs methods:
     const handleChange = (event, newValue) => {
          setValue(newValue);
     }
     
//responsive design:
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down("sm"));

//to test mobile device responsivness:
const iOS = process.browser && /iPad|iPhone|iPod/
.test(navigator.userAgent);
//responsive tabs:
const tabs = (
     <React.Fragment>
         <Tabs 
         className={classes.tabContainer}
         onChange={handleChange}
         value={value}
         indicatorColor="primary"
         >                  
                               <Tab           
                              className={classes.tab}
                              component={Link} to="/"
                              label="Home"
                              />
                              <Tab 
                              className={classes.tab}
                              component={Link} to="/shop"
                              label="Shop"                        
                              />  
                              <Tab 
                              className={classes.tab}
                              component={Link} to="/orders"
                              label="Orders"
                              />                   
                         </Tabs>
     </React.Fragment>
)
const drawer = (
     <React.Fragment>
          <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          open={openDrawer}
          onOpen={() => setopenDrawer(true)}
          onClose={() => setopenDrawer(false)}
          >
               <List disablePadding>
               <ListItem
                    component={Link} to="/"
                    onClick={() => {
                         setopenDrawer(false);
                         setValue(0);
                     }}
                    selected={value === 0}
                    >
                         <ListItemText
                         disableTypography
                         >
                             <img src={Logo} 
                              alt="company logo"
                              className={classes.logo}/>
                         </ListItemText>
                    </ListItem>
                    <ListItem
                    component={Link} to="/"
                    onClick={() => {
                         setopenDrawer(false);
                         setValue(0);
                     }}
                    selected={value === 0}
                    >
                         <ListItemText
                         disableTypography
                         >
                              Home
                         </ListItemText>
                    </ListItem>
             
                    <ListItem>
                         <ListItemText>
                              SHop
                         </ListItemText>
                    </ListItem>
             
                    <ListItem>
                         <ListItemText>
                              Orders
                         </ListItemText>
                    </ListItem>
               </List>
          </SwipeableDrawer>
          <IconButton className={classes.drawerIconContainer}
          onClick={() => setopenDrawer(!openDrawer)}
          disableRipple
          >
               <MenuIcon className={classes.drawerIcon}/>
          </IconButton>
     </React.Fragment>
)
useEffect(() => {
     switch(window.location.pathname) {
          case "/":
               if(value !== 0) {
                    setValue(0)                
               }
               break;
          case "/shop":
               if(value !== 1) {
                    setValue(1)
               }
               break;
          case "/orders":
               if(value !== 2) {
                    setValue(2)
               }
               break;
          default:
               break;
     }
},[value])
     return (

          <React.Fragment>
               <AppBar 
               position="fixed" 
               color="secondary"
               >
                    <Toolbar disableGutters
                     className={classes.appHeader}>
                         <Button
                         className={classes.logoContainer}
                         disableRipple
                         component={Link} to="/"
                         onClick={() => setValue(0)}
                         >
                              <img src={Logo} 
                              alt="company logo"
                              className={classes.logo}/>
                              
                              {/* <Logo
                               className={classes.logo} />  */}
                         </Button>
                         
                         {/*tabs/drawer display statement */}
                         {
                              matches
                              ?
                              drawer
                              :
                              tabs
                         }

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
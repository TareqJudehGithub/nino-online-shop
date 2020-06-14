import React, { useState, useEffect } from "react";
import Logo from "../../../assets/images/ninos-logo.svg";
import CartIcon from "../../cart-icon/cart-icon";
import CartDropdown from "../../cart-dropdown/cart-dropdown";
//redux imports:
import { connect } from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCurrentUsers} from "../../../redux/user/user.selectors";
import {selectCartHidden} from "../../../redux/cart/cart.selectors";

//react-router-dom imports:
import {Link} from "react-router-dom";
//firebase imports:
import {auth} from "../../../firebase/firebase.util";

//Material-UI imports:
import {
     AppBar, Toolbar, Tab, Tabs,
     //  Menu, MenuItem,
     Button,
     useMediaQuery,
     SwipeableDrawer,
     List, ListItem, ListItemText, IconButton,
     Menu, MenuItem
     } from '@material-ui/core/';
import {useTheme} from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu"
import styles from "./header.styles";


const Header = ({ currentUser, hidden }) => {
     
    
//Material-UI:
     const classes = styles();     
     const theme = useTheme();
     const matches = useMediaQuery(theme.breakpoints.down("sm"));
     
     const [value, setValue] = useState(false); //Tabs state
     const [openDrawer, setopenDrawer] = useState(false); //Drawer state
     const [anchorEL, setAnchorEL] = useState(null); //menu state
     const [openMenu, setOpenMenu] = useState(false);//menu state
     // const [selectedIndex, setselectedIndex] = useState(0); //menu selection states
   
     const handleChange = (event, newValue) => { //tabs methods
          setValue(newValue);
     }   
     const handleClick = (event) => {            //menu method(s)
          setAnchorEL(event.currentTarget);
          setOpenMenu(true); 
          
     };
     const handleClose = (event) => {        //closing menu even handler
          setAnchorEL(null);
          setOpenMenu(false);
     };
     // const handleMenuItemClick = (e, index) => { //menu selection handler
     //      setAnchorEL(null);
     //      setOpenMenu(false);
     //      setselectedIndex(index) //index item (menuitem) we're clicking
     // }

     const iOS = process.browser && /iPad|iPhone|iPod/ //mobile device responsivness
     .test(navigator.userAgent);

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
                    disableRipple
                    />
                    <Tab 
                    className={classes.tab}
                    component={Link} to="/shop"
                    label="Shop"  
                    disableRipple
                    onClick={(event) => handleClick(event)}
                    aria-owns={anchorEL ? "cart" : undefined}
                    aria-haspopup={anchorEL ? "true" : undefined}
                    />  
                    {
                    currentUser
                    ?
                    ( <Tab 
                    className={classes.tab}
                    style={{width: "10em", fontSize: "13px"}}
                    onClick={() => auth.signOut()}
                    component={Link} to="/"
                    label={`${currentUser.displayName} 
                              ,Sign Out`}
                    disableRipple
                    /> )
                    :
                    (<Tab 
                    className={classes.tab}
                    component={Link} to="/signin"
                    label="Sign In"
                    disableRipple
                    />) 
                    } 
                    <CartIcon />                       
          </Tabs>   
          {
          // show/hide cart dropdown menu:
               hidden ? null : <CartDropdown />
          }
          <Menu
          classes={{paper: classes.menu}}
          id="cart"
          anchorEl={anchorEL}
          open={openMenu}
          onClose={handleClose}
          elevation={0}
          MenuListProps={{onMouseLeave: handleClose}}
          
          >
               <MenuItem
               classes={{root: classes.firstMenuItem}}
               onClick={() => {
                   handleClose()
                    setValue(1)
                    handleClose()
               }}
               component={Link} to="/shop"
               >
                    Shop
               </MenuItem>
               <MenuItem
               classes={{root: classes.menuItem}}
               onClick={() => {
                   handleClose()
                    setValue(1)
                    handleClose()
               }}
               component={Link} to="/shop"
               >
                    Women
               </MenuItem>
               <MenuItem
               classes={{root: classes.menuItem}}
               onClick={() => {
                   handleClose()
                    setValue(1)
                    handleClose()
               }}
               component={Link} to="/shop"
               >
                    Men
               </MenuItem>
          </Menu>

         
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
                    {/* <ListItem
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
                    </ListItem> */}
                    <ListItem
                    component={Link} to="/signin"
                    onClick={() => {
                         setopenDrawer(false);
                         setValue(3);
                    }}
                    selected={value === 3}>
                   {
                        currentUser
                        ?
                         <ListItemText
                         onClick={() =>auth.signOut()}>
                              <p>Hello, {currentUser.displayName}</p>
                         </ListItemText>
                        :
                        <ListItemText 
                        component={Link} to="/signin">
                             No User
                        </ListItemText>
                        
                   }
                        
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
             
                    <ListItem
                    component={Link} to="/shop"
                    onClick={ () => {
                         setopenDrawer(false);
                         setValue(1);
                    }}
                    selected={value === 1}
                    >
                         <ListItemText>
                              Shop
                         </ListItemText>
                    </ListItem>
             
                    <ListItem
                    component={Link} to="/signin"
                    onClick={() => {
                         setopenDrawer(false);
                         setValue(2);
                    }}
                    selected={value === 2}>
                   {
                        currentUser
                        ?
                        <ListItemText
                        onClick={() =>auth.signOut()}>
                             Sign Out
                        </ListItemText>
                        :
                        <ListItemText
                        component={Link} to="/">                      
                             Sign In
                        </ListItemText>
                   }
                        
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
               <AppBar position="fixed" color="secondary">
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
                         </Button>
                               
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
     )
}
const mapStateToProps = createStructuredSelector({
     currentUser: selectCurrentUsers,
     hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
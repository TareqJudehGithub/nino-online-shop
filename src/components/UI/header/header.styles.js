import {makeStyles} from '@material-ui/core';
const styles = makeStyles(theme => ({
     appHeader: {
          height: "5em",
          [theme.breakpoints.down("md")]: {
               height: "4.5em"
          },
          [theme.breakpoints.down("sm")]: {
               height: "3.5em"
          },
          [theme.breakpoints.down("xs")]: {
               height: "2.5em"
          },
     },
     toolbarMargin: {
          ...theme.mixins.toolbar,
          marginBottom: "3em",
          [theme.breakpoints.down("md")]: {
               marginBottom: "2em"
          },
          [theme.breakpoints.down("sm")]: {
               marginBottom: "1.5em"
          },
          [theme.breakpoints.down("xs")]: {
               marginBottom: "1em"
          }
     },
     tabContainer: {
          marginLeft: "auto",
          paddingRight: "10px",
     },
     tab: {
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: "25px",
          "&:hover": {
               fontWeight: "bold",            
               borderRadius: "25px",
               textShadow : `0 0 12px ${theme.palette.common.orange}`,
               backgroundColor: "transparent"
          }
     },
     logoContainer: {
          padding: "1em",
          "&:hover": {
          backgroundColor: "transparent"
          }
     },
     logo: {
          height: "4em",
          [theme.breakpoints.down("md")]: {
               height: "3.5em"
          },
          [theme.breakpoints.down("sm")]: {
               height: "3em"
          },
          [theme.breakpoints.down("xs")]: {
               height: "2.5em"
          }
     },
     drawerIconContainer: {
          marginLeft: "auto"
     },
     drawerIcon: {
          color: theme.palette.common.orange,
          [theme.breakpoints.down("sm")]: {
               width: "35px",
               height: "35px"
          },
          [theme.breakpoints.down("xs")]: {
               width: "25px",
               height: "25px"
          }
     },
     menu: {
          backgroundColor: `rgb(55, 71, 79, 0.85)`,
          marginTop: "2.9em",
          right: "1em",
          width: "10em",
          boxShadow: `0 0 3px ${theme.palette.common.orange}`
     },
     firstMenuItem: {
          ...theme.typography.firstMenuItem,
          "&:hover":{
               backgroundColor: "transparent"
          }         
     },
     menuItem: {
          ...theme.typography.tab,
          opacity: 0.7,
          ...theme.typography.menuItem,
          "&:hover": {
               opacity: 1,
               backgroundColor: "transparent",
               fontWeight: 1000,
               color: theme.palette.common.orange
          },
          
     }
}));

export default styles;
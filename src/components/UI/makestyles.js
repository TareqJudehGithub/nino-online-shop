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
          paddingRight: "10px"
     },
     tab: {
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: "25px",
          color: "white",
          "&:hover": {
               fontWeight: "bold",            
               backgroundColor: theme.palette.common.orange,
               borderRadius: "25px",
               border: "1px solid orange"
          },
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
          color: theme.palette.primary.main,
          [theme.breakpoints.down("sm")]: {
               width: "35px",
               height: "35px"
          },
          [theme.breakpoints.down("xs")]: {
               width: "25px",
               height: "25px"
          }
     }
}));

export default styles;
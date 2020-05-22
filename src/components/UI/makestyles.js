import {makeStyles} from '@material-ui/core';
const styles = makeStyles(theme => ({
     
     toolbarMargin: {
          ...theme.mixins.toolbar,
          marginBottom: "3rem"
     },
     tabContainer: {
          marginLeft: "auto",
          "&:hover": {
               
          }
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
          }
     }
}));

export default styles;
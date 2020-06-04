import {makeStyles} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
     CartDropdown: {
          position: "absolute",
          width: "300px",
          height: "340px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          boxShadow: "0 0 5px grey",
          backgroundColor: "white",
          borderRadius: "5px",
               [theme.breakpoints.down("xl")]:{
                    top: "82px",
                    right: "27px",
               },
               [theme.breakpoints.down("lg")]:{
                    top: "82px",
                    right: "27px",
               },
               [theme.breakpoints.down("md")]:{
                    top: "75px",
               right: "25px",
               },
               [theme.breakpoints.down("sm")]:{
                    top: "75px",
               right: "25px",
               },      
          zIndex: 5
     },
     cartItems: {
          fontSize: "1em",
          height: "220px",
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          overflow: "auto",
          boxShadow: "0 0 2px grey",
          margin: 0,
          padding: "3px",
          borderRadius: "5px",
     },
     emptyMsg: {
          fontSize: "1em",
          margin: "50px auto",
          color: "black"
     },
     cartFooter: {
          marginTop: "0.5em",
          height: "5em",
          color: "black",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
     },
     cartBtn: {
          width: "75%",
          margin: " 0 auto",
          "&:active": {
               backgroundColor: "#ff6d00"
          }    
     }
}))

export default useStyles;
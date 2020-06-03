import {makeStyles} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
     CartDropdown: {
          position: "absolute",
          width: "240px",
          height: "340px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          boxShadow: "0 0 5px orangered",
          backgroundColor: "white",
          top: "90px",
          right: "40px",
          zIndex: 5
     },
     cartItems: {
          height: "240px",
          display: "flex",
          flexDirection: "column",
          overflow: "auto"
     },
     emptyMsg: {
          fontSize: "1em",
          margin: "50px auto",
          color: "black"
     },
     cartBtn: {
          "&:active": {
               backgroundColor: "#ff6d00"
          }    
     }
}))

export default useStyles;
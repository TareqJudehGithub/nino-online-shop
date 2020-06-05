import {makeStyles} from "@material-ui/core";


const useStyle = makeStyles(theme => ({
     footer: {
          backgroundColor: theme.palette.common.blueGrey,
          height: "21vh",
          width: "100%",
          zIndex: 1302, 
          position: "relative",
          boxShadow: "0 0 4px"
     },
     btn: {

          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",     
          border: "1px solid rgba(0, 0, 0, 0.25)",
          margin: "0 auto",
          backgroundColor: theme.palette.common.blueGrey,
          "&:hover": {
               backgroundColor: `rgb(55, 71, 79, 0.85)`,
          }
     },
     mainContainer: {
          position: "absolute",
     },
     gridItem: {
          margin: "3em"
     },
     logo: {  
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          margin: "0 auto",
          height: "5px",
          position: "absolute",
          bottom: "5.5%",
          marginBottom: "10px",
          fontSize: "14px",
          color: "grey",
          borderTop: "1px solid rgba(0, 0, 0, 0.25)"
     },
     span: {
          fontSize: "15px",
         margin: "auto 0"
     },
     TM: {
          fontSize: "7px"
     },
     img: {
          height: "3em",
          opacity: "0.75"
     },
     mainLink: {
          color: "white"
     },
     link: {
          color: "white",
     }
}));

export default useStyle;
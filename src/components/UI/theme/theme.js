import {createMuiTheme} from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import blueGrey from "@material-ui/core/colors/blueGrey"

const priOrange = orange[700];
const secOrange = "#ff6d00";

const headerColor = blueGrey[800];

export default createMuiTheme({
     palette: {
          common: {
               orange: `${priOrange}`,
               deepOrange: `${secOrange}`
          },
          primary: {
               main: `${priOrange}`
          },
          secondary: {
               main: `${headerColor}`
          }
     },
     typography: {
          tab: {
               fontWeight: "400",
               fontSize: "1rem"
          }
     }
});
// import {createMuiTheme} from "@material-ui/core/styles";
// import deepOrange from "@material-ui/core/colors/deepOrange";
// // const orange = "#FF4314";
// const orange = deepOrange.A400;
// const white = deepOrange[50];

// export default createMuiTheme({
//      palette: {
//           common: {
//                primary: `${orange}`,
//                secondary: `${white}`
//           },
//           primary: {
//                main: `${orange}`
//           },
//           secondary: {
//                main: `${white}`
//           }
//      },
//      typography: {
//           tab: {
//                fontWeight: 800,
//                fontSize: "18px"
//           },
//           menuItem: {
//                fontSize: "0.95rem"
//           }
//      }
// })

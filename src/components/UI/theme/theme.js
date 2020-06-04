import {createMuiTheme} from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import blueGrey from "@material-ui/core/colors/blueGrey"

const priOrange = orange[700];
const secOrange = "#ff6d00";
const lightOrange = orange[600];

const headerColor = blueGrey[800];

export default createMuiTheme({
     palette: {
          common: {
               orange: `${priOrange}`,
               deepOrange: `${secOrange}`,
               blueGrey: `${headerColor}`

          },
          primary: {
               main: `${lightOrange}`
          },
          secondary: {
               main: `${headerColor}`
          }
     },
     typography: {
          tab: {
               fontWeight: "400",
               fontSize: "1rem"
          },
          firstMenuItem: {
               fontSize: "0.9em",
               color: "white",
               fontWeight: "bolder"
          },
          menuItem: {
               fontSize: "0.8em",
               color: "white"
          }
     }
});

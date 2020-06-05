import React from "react";
import {Link} from "react-router-dom";
import {Grid, Button} from "@material-ui/core/";
import Logo from "../../../assets/images/ninos-logo.svg";
import styles from './footer.styles';

const Footer = () =>{
     const classes = styles();
     const scrollToTop = () => {
          return(
               window.scrollTo({
                    top: 0,
                    behavior: "smooth"
               })
          )
     };
     return (
          <React.Fragment>
               <footer className={classes.footer}>
                    <div className={classes.btn}>
                    <Button color="primary"
                    onClick={() => scrollToTop()}
                    >
                         Back to top
                    </Button>
                    </div>
                    
                  <Grid container 
                  className={classes.mainContainer} justify="center" alignItems="flex-start">

                       <Grid item className={classes.gridItem}>
                            <Grid container direction="column" spacing={2}>
                              <Grid item
                              className={classes.mainLink}
                              component={Link} to="/"> 
                                   Home
                              </Grid>
                            </Grid>
                       </Grid>

                       <Grid item
                         className={classes.gridItem}> 
                         <Grid container direction="column" spacing={2}>
                              <Grid item
                              className={classes.mainLink}
                              component={Link} to="/shop">
                                   shop
                              </Grid>
                              <Grid item
                              className={classes.mainLink}
                              component={Link} to="/shop">
                                   Women
                              </Grid>
                              <Grid item
                              className={classes.link}
                              component={Link} to="/shop">
                                   Men
                              </Grid>       
                         </Grid>
                       </Grid>
                       <Grid item 
                       className={classes.gridItem}>
                         <Grid container direction="column">
                              <Grid item
                              className={classes.mainLink}
                              component={Link} to="/">
                                   <img src={Logo} alt="logo" 
                                   className={classes.img}/>
                              </Grid>
                            </Grid>
                       </Grid>
                  </Grid>
              
                    <div className={classes.logo}>
                         <span className={classes.span}>
                              nino's online shop
                              <sup className={classes.TM}>TM</sup>
                         </span>
                         
                    </div>
               </footer>
          </React.Fragment>
     )
     
}
export default Footer;
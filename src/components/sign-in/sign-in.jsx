import React from "react";
import FormInput from "../form-input/form-input";
// import CustomButton from '../custom-button/custom-button';
import Button from "@material-ui/core/Button"
//google authentication:
import {auth, signInWithGoogle} from "../../firebase/firebase.util";
import {withRouter} from "react-router-dom";

import "./sign-in.scss";

class SignIn extends React.Component {
     constructor() {
          super()
          this.state = {
               email: "",
               password: ""
          }
     };

     handleSubmit = async (event) => {
          event.preventDefault();
          const { email, password } = this.state;
          try {
                
                    auth.signInWithEmailAndPassword(email, password);
                    this.setState({
                         email: "",
                         password: ""
                    })
                    console.log("Sign In was successfull!");
                    this.props.history.push("/");

          } catch (error) {
               console.log(error);
               alert("Invalid username/password!");
          }
         
     };
     handleChange = event => {
          const { name, value } = event.target; //name and value from target <input />
          this.setState({ [name]: value}) //will dynamically setState depends on
                                          //name and value.
     }
     
     render() {
          return(
               <div className="sign-in">
                    <h2>Already have an account?</h2>
                    <span className="title">
                         SignIn in with your email and password
                    </span>
                    
                    <form onSubmit={this.handleSubmit}>

                         <FormInput 
                         handleChange={this.handleChange}
                         label="email"
                         name="email"
                         type="email"
                         value={this.state.email}
                         autoComplete="email-address"
                         required
                         
                          >
                         </FormInput>
                         <FormInput 
                         handleChange={this.handleChange}  
                         label="password"
                         name="password"
                         type="password"
                         value={this.state.password}
                         autoComplete="current-password"         
                         // placeholder="Enter your password"   
                         required         
                         >
                         </FormInput>
                         <div className="btns">
                              <Button 
                              variant="contained" color="primary"
                              type="submit" value="Submit Form">
                                   Sign In
                              </Button>

                              <Button
                              onClick={signInWithGoogle}
                              style={{marginLeft: "5px"}}
                              type="button"
                              variant="contained"
                              color="secondary"
                              >
                                   Sign In with google
                              </Button>
                         </div>
                         
                    </form>
               </div>
               
          )
     }
}
export default withRouter(SignIn);
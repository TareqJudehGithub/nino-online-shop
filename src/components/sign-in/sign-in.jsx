import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button';

//google authentication:
import {signInWithGoogle} from "../../firebase/firebase.util";

import "./sign-in.scss";

class SignIn extends React.Component {
     constructor() {
          super()
          this.state = {
               email: "",
               password: ""
          }
     };

     handleSubmit = event => {
          event.preventDefault();
          this.setState({
               email: "",
               password: ""
          })
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
                         // placeholder="exampl@email.com"   
                         required
                          
                         />
                         <FormInput 
                         handleChange={this.handleChange}  
                         label="password"
                         name="password"
                         type="password"
                         value={this.state.password}
                         // placeholder="Enter your password"   
                         required         
                         />
                         <div className="btns">
                         <CustomButton type="submit" value="Submit Form">
                              Sign In
                         </CustomButton>

                         <CustomButton 
                         onClick={signInWithGoogle}
                         style={{marginLeft: "5px"}}
                         >
                              Sign In with google
                         </CustomButton>
                         </div>
                         
                    </form>
               </div>
               
          )
     }
}
export default SignIn;
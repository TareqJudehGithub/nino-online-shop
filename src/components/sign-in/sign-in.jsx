import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button';
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
                         <CustomButton type="submit" value="Submit Form">
                              Sign In
                         </CustomButton>
                    </form>
               </div>
               
          )
     }
}
export default SignIn;
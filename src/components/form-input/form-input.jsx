import React from "react";
import "./form-input.scss";

const FormInput = ({ handleChange, label, ...otherProps}) => {
     return (
          <div className="group">
               <input 
               className="form-input"
               onChange={handleChange}
               {...otherProps} //name, type, value, placeholder, and required.
               />
               {
                    label 
                    ?  //if the user enters a value, apply class "shrink"
                    <label 
                    className={
                         `${otherProps.value.length ? "shrink" : ""}
                         form-input-label`
                         }
                    >
                         {label}
                    </label>
                    : //if not, just render nothing.
                    null
               }

          </div>
     )
}
export default FormInput;
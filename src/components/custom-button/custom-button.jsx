import React from 'react';
import './custom-button.scss';

const CustomButton = ({children, ...otherProps}) => {
     return(   /* type="submit will be passed into the button"*/
          <div className="custom-button" {...otherProps}> 
          {children}
          </div>
     )
}
export default CustomButton;
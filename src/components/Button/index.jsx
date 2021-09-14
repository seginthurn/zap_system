import React, { useState } from 'react';
import './Button.css';

const Button = ({children}) => {
    return (
        <div>
            <button className="buttonPrimary">{children}</button>
        </div>
      );
}
 
export default Button;
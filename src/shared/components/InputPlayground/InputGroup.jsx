import React from "react";
import css from "./input.module.css"



export const InputGroup = ({ children, sveet, dark }) => {
  
  
  // return <div className={css.inputGroup}>{children}</div>;
  return <div
    className={`
      ${css.inputGroup} 
      ${sveet ? "bg-gray-100" : ""} 
      ${dark ? "bg-gray-900" :""} 
    
    `}>{children}</div>;
};

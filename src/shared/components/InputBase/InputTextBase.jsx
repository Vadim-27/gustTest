import React from "react";
import css from './InputBase.module.css';



export const InputTextBase = ({
  size='xs',
  value,
  onChange,
  placeholder = "",
  checked,
  alignment
}) => {

  const hasBorder = checked.some(item => item === "BorderBase")

  const sizeClass = {
    xs: css.inputXs,
    sm: css.inputSm,
    lg: css.inputLg,
    xl: css.inputXl,
  };

  return (
   
      <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      
      className={`
       
        ${sizeClass[size] || sizeClass.xs}
         ${hasBorder ? css.border : ""}  
         ${alignment==="right" ? "text-right" : ""} 
      `}
    />
  );
};

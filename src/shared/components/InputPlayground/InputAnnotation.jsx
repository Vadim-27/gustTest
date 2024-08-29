import React from "react";



export const InputAnnotation = ({
  state,
  checked,
  text,
  sveet,
  dark,

}) => {
  const hasHelperText = checked.some(item => item === "HelperText");
  const getClassNames = () => {
    let baseClasses = "text-xs font-normal leading-5 text-left block";
    if (sveet) {
      return `
        ${baseClasses}
        ${state === "error" || state === "errorFocus" ? "text-red-600" : state === "disabled" ? "text-gray-300" : "text-gray-700"}
      `;
    } else if (dark) {
      return `
        ${baseClasses}
        ${state === "error" || state === "errorFocus" ? "text-red-600" : state === "disabled" ? "text-gray-700" : "text-gray-400"}
      `;
    }
    return baseClasses;
  };
 
  return (
    <>
      {hasHelperText && <span
        className={getClassNames()}
      
    >
      {text}
      </span>}
    </>
  );
};

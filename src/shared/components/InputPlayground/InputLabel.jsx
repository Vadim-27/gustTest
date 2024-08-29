import React from "react";
import infoIcon from '../../../assets/icons/info-circle.svg'


export const InputLabel = ({ label, htmlFor, labelSize, checked, state, sveet, dark }) => {

  const hasInfo = checked.some(item => item === "Info");

  const getThemeClassNames = () => {
    if (sveet) {
      return `${state === "disabled" ? "text-gray-600" : "text-gray-900"}`;
    } else if (dark) {
      return `${state === "disabled" ? "text-gray-400" : "text-gray-50"}`;
    }
    return "";
  };

  return (
    <>
      {hasInfo && <div className={`absolute left-10 bottom-1/2 transform translate-y-1/2 ${labelSize === "sm" ? "left-8" :"left-10"}`}>
        <img alt="icon info" src={infoIcon} width={12} height={12} />
      </div>}
      <label
        htmlFor={htmlFor}
        className={`
          ${getThemeClassNames()}
       
      ${labelSize === "sm" ? "text-xs font-medium leading-5" : ""} 
      ${labelSize === "lg" ? "text-sm font-medium leading-6" : ""}
      `}>
        {label}
      </label>
    </>
  );
};

import React from "react";
import css from './input.module.css';
import searchIcon from '../../../assets/icons/search-lg.svg';
import helpIcon from '../../../assets/icons/help-icon.svg';
import shortKey from '../../../assets/icons/shortkey.svg';
import searchIconRed from '../../../assets/icons/search-lg-red.svg';
import helpIconRed from '../../../assets/icons/help-icon-red.svg';




export const InputText = ({
  state,
  value,
  onChange,
  placeholder = "",
  checked,
  sveet,
  dark,
  labelSize

}) => {

  const hasBorder = checked.some(item => item === "Border");
  const hasIconBefore = checked.some(item => item === 'IconBefore');
  const hasIconAfter = checked.some(item => item === 'IconAfter');
  const hasShortKey = checked.some(item => item === 'ShortKey');

  const getClassNames = () => {
    if (sveet) {
      return `
        ${css.input}
        ${hasBorder ? css.border : ""}
        ${state === "focus" && hasBorder ? css.inputFocus : ""}
        ${state === "error" && hasBorder ? css.errorBorder : ""}
        ${state === "errorFocus" && hasBorder ? css.errorFocusBorder : ""}
        ${state === "disabled" ? css.disabled : ""}
        ${hasIconBefore ? css.iconBeforePading : ""}
        ${hasIconAfter ? css.iconAfterPading : ""}
        ${state === "disabled" ? "text-gray-600" : "text-gray-900"}
      `;
    } else if (dark) {
      return `
        ${css.inputDark}
        ${hasBorder ? css.borderDark : ""}
        ${state === "focus" && hasBorder ? css.inputFocusDark : ""}
        ${state === "error" && hasBorder ? css.errorBorderDark : ""}
        ${state === "errorFocus" && hasBorder ? css.errorFocusBorderDark : ""}
        ${state === "disabled" ? css.disabledDark : ""}
        ${hasIconBefore ? css.iconBeforePadingDark : ""}
        ${hasIconAfter ? css.iconAfterPadingDark : ""}
        ${state === "disabled" ? "text-gray-400" : "text-gray-50"}
      `;
    }
    return "";
  };

  return (
    <>
      {hasIconBefore && <div className="absolute left-4 bottom-1/2 transform translate-y-1/2">
        <img alt="icon search" src={`${state === "error" || state === "errorFocus" ? searchIconRed : searchIcon}`} width={16} height={16} />
      </div>}
      {hasIconAfter && <div className={`
        absolute  bottom-1/2 transform translate-y-1/2
        ${hasShortKey ? "right-14" : "right-4"}
       
        `}>
        <img alt="icon help" src={`${state === "error" || state === "errorFocus" ? helpIconRed : helpIcon}`} width={16} height={16} />
      </div>}
      {hasShortKey && <div className="absolute right-4 bottom-1/2 transform translate-y-1/2">
        <img alt="icon short Key" src={shortKey} width={32} height={20} />
      </div>}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={state === "disabled"}
        className={`
          ${getClassNames()}
          ${labelSize === "sm" ? "text-xs font-medium leading-5" : ""} 
          ${labelSize === "lg" ? "text-sm font-medium leading-6" : ""}
          `}
     
      />
      
    </>
 
  );
};
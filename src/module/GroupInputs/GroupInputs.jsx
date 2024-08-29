// const GroupInputs = () => {
//     return (
//         <form></form>
//     )
//  }
// export default GroupInputs;
import { useState, useEffect } from "react";
import { InputText } from "../../shared/components/InputPlayground/InputText";
import { InputLabel } from "../../shared/components/InputPlayground/InputLabel";
import { InputAnnotation } from "../../shared/components/InputPlayground/InputAnnotation";
import { InputGroup } from "../../shared/components/InputPlayground/InputGroup";
import Sidebar from "../SideBar/SideBar";
import BaseInput from "./BaseInput/BaseInput";





const GroupInputs = () => {
  const [size, setSize] = useState('');
  const [state, setState] = useState('');
  const [labelSize, setLabelSize] = useState('');
  const [labelPosition, setLabelPosition] = useState('');
  const [alignment, setAlignment] = useState('');
  const [checked, setChecked] = useState([]);

  const [value, setValue] = useState("");
  const [valueBase, setValueBase] = useState("");

  
  const dark = "dark";
  const sveet = "sveet";

  useEffect(() => {
    const hasUserText = checked.some(item => item === "UserText");
    if (hasUserText) {
      return setValue('input...');
    }
    setValue("")
  }, [checked]);

  const hasLabel = checked.some(item => item === "Label")
  console.log("labelPosition", labelPosition)
  return (
    <div className="flex">
      <Sidebar size={size} setSize={setSize}
        state={state} setState={setState}
        labelSize={labelSize} setLabelSize={setLabelSize}
        labelPosition={labelPosition} setLabelPosition={setLabelPosition}
        alignment={alignment} setAlignment={setAlignment}
        checked={checked} setChecked={setChecked}
      />
      
      <div className="ml-auto mr-auto">
        <BaseInput
          sveet={sveet}
          size={size}
          value={valueBase}
          checked={checked}
          alignment={alignment}
          onChange={setValueBase}
          placeholder="input..." />
        <h2 className="mt-5 mb-5 text-center text-1xl font-bold">Playground input</h2>
        <InputGroup sveet={sveet}>
          <div className={labelPosition === "side" ? "flex gap-4 items-center" : ""}>
            <div className="relative py-1 mb-1 pr-6">
              {hasLabel &&
                <>
                <InputLabel label="Email" htmlFor="email" labelSize={labelSize} checked={checked} state={state} sveet={sveet} />
                </>
              }
            </div>
            <div >
              <div className="relative">
                <InputText
                  state={state}
                  value={value}
                  checked={checked}
                  labelSize={labelSize}
                  sveet={sveet}
                  onChange={setValue}
                  placeholder="Enter your email"
                />
              </div>
              <InputAnnotation text="This is a hint text to help user." checked={checked} state={state} sveet={sveet} />
            </div>
          </div>
        </InputGroup>
        <InputGroup dark={dark}>
          <div className={labelPosition === "side" ? "flex gap-4 items-center" : ""}>
            <div className="relative py-1 mb-1 pr-6">
              {hasLabel &&
                <>
                <InputLabel label="Email" htmlFor="email" labelSize={labelSize} checked={checked} state={state} dark={dark} />
                </>
              }
            </div>
            <div >
              <div className="relative">
                <InputText
                  state={state}
                  value={value}
                  dark={dark}
                  checked={checked}
                  labelSize={labelSize}
                  onChange={setValue}
                  placeholder="Enter your email"
                />
              </div>
              <InputAnnotation text="This is a hint text to help user." checked={checked} state={state} dark={dark} />
            </div>
          </div>
        </InputGroup>
      </div>
    </div>
  );
};
export default GroupInputs;

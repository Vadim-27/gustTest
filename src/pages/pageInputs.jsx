import React from "react";
import GroupInputs from "../module/GroupInputs/GroupInputs";
import Sidebar from "../module/SideBar/SideBar";

const PageInputs = () => {
  // const [size, setSize] = React.useState('');
  // const [state, setState] = React.useState('');
  // const [labelSize, setLabelSize] = React.useState('');
  // const [labelPosition, setLabelPosition] = React.useState('');
  // const [alignment, setAlignment] = React.useState('');
    return (
      <>
        <h1 className="mb-5 text-center text-3xl font-bold">
          All elements in component
        </h1>

        {/* <Sidebar /> */}
        <GroupInputs />
      </>
    );
 }
export default PageInputs;

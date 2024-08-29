import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import SelectInput from "./SelectInput/SelectInput";

const Sidebar = ({
    size, state, labelSize, labelPosition, alignment,
    setSize, setState, setLabelSize, setLabelPosition, setAlignment, checked, setChecked
}) => {
    const sizeArr = ["xs", "sm", 'lg', 'xl'];
    const stateArr = ['default', 'hover', 'focus', 'error', 'errorFocus', 'disabled'];
    const labelSizeArr = ["sm", 'lg'];
    const labelPositionArr = ["top", 'side'];
    const alignmentArr = ['left', 'right'];

    // const [checked, setChecked] = React.useState([]);
    // const [size, setSize] = React.useState('');
    // const [state, setState] = React.useState('');
    // const [labelSize, setLabelSize] = React.useState('');
    // const [labelPosition, setLabelPosition] = React.useState('');
    // const [alignment, setAlignment] = React.useState('');

    console.log("checked", checked);


    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleChangeSize = (event) => {
        setSize(event.target.value);
    };
    const handleChangeState = (event) => {
        setState(event.target.value);
    };
    const handleChangeLabelSize = (event) => {
        setLabelSize(event.target.value);
    };
    const handleChangeLabelPosition = (event) => {
        setLabelPosition(event.target.value);
    };
    const handleAlignment = (event) => {
        setAlignment(event.target.value);
    };

    return (
        // <Box className="w-72 h-auto bg-gray-700">
        <List
            sx={{ width: "100%", maxWidth: 360, }}
            className="w-72 h-auto bg-gray-300"
            subheader={<ListSubheader>Settings</ListSubheader>}
        >
            <ListItem>
                <ListItemText id="switch-list-label-LabelSize" primary="Label Size" />
                <SelectInput prop={labelSizeArr} label={"Label Size"} handleChange={handleChangeLabelSize} value={labelSize} />
            </ListItem>


            <ListItem>
                <ListItemText id="switch-list-label-State" primary="State" />
                <SelectInput prop={stateArr} label={"State"} handleChange={handleChangeState} value={state} />
            </ListItem>
            <ListItem>

                <ListItemText
                    id="switch-list-label-UserText"
                    primary="User text"
                />
                <Switch
                    edge="end"
                    onChange={handleToggle("UserText")}
                    checked={checked.indexOf("UserText") !== -1}
                //   inputProps={{
                //     "aria-labelledby": "switch-list-label-bluetooth",
                //   }}
                />
            </ListItem>
            <ListItem>
                <ListItemText id="switch-list-label-LabelPosition" primary="Label position" />
                <SelectInput
                    prop={labelPositionArr}
                    label={"Label position"}
                    handleChange={handleChangeLabelPosition}
                    value={labelPosition}
                />
            </ListItem>
            <ListItem>

                <ListItemText id="switch-list-label-Border" primary="Border" />
                <Switch
                    edge="end"
                    onChange={handleToggle("Border")}
                    checked={checked.indexOf("Border") !== -1}
                //   inputProps={{
                //     "aria-labelledby": "switch-list-label-wifi",
                //   }}
                />
            </ListItem>






            <ListItem>

                <ListItemText
                    id="switch-list-label-HelperText"
                    primary="Helper text"
                />
                <Switch
                    edge="end"
                    onChange={handleToggle("HelperText")}
                    checked={checked.indexOf("HelperText") !== -1}
                //   inputProps={{
                //     "aria-labelledby": "switch-list-label-bluetooth",
                //   }}
                />
            </ListItem>
            <ListItem>

                <ListItemText
                    id="switch-list-label-Label"
                    primary="Label"
                />
                <Switch
                    edge="end"
                    onChange={handleToggle("Label")}
                    checked={checked.indexOf("Label") !== -1}
                //   inputProps={{
                //     "aria-labelledby": "switch-list-label-bluetooth",
                //   }}
                />
            </ListItem>
            <ListItem>

                <ListItemText
                    id="switch-list-label-Info"
                    primary="Info"
                />
                <Switch
                    edge="end"
                    onChange={handleToggle("Info")}
                    checked={checked.indexOf("Info") !== -1}
                //   inputProps={{
                //     "aria-labelledby": "switch-list-label-bluetooth",
                //   }}
                />
            </ListItem>
            <ListItem>
                <ListItemText id="switch-list-base-input-block" primary="Base input" className="mb-5 text-center text-1xl font-bold" />

            </ListItem>
            <ListItem>
                <ListItemText id="switch-list-label-Size" primary="Size" />
                <SelectInput prop={sizeArr} label={"Size"} handleChange={handleChangeSize} value={size} />
            </ListItem>
            <ListItem>
                <ListItemText id="switch-list-label-Alignment" primary="Alignment" />
                <SelectInput prop={alignmentArr} label={"Alignment"} handleChange={handleAlignment} value={alignment} />
            </ListItem>
            <ListItem>

                <ListItemText id="switch-list-label-BorderBase" primary="Border" />
                <Switch
                    edge="end"
                    onChange={handleToggle("BorderBase")}
                    checked={checked.indexOf("BorderBase") !== -1}
                //   inputProps={{
                //     "aria-labelledby": "switch-list-label-wifi",
                //   }}
                />
            </ListItem>
            <ListItem>

                <ListItemText
                    id="switch-list-label-IconAfter"
                    primary="Icon After"
                />
                <Switch
                    edge="end"
                    onChange={handleToggle("IconAfter")}
                    checked={checked.indexOf("IconAfter") !== -1}
                //   inputProps={{
                //     "aria-labelledby": "switch-list-label-bluetooth",
                //   }}
                />
            </ListItem>
            <ListItem>

                <ListItemText
                    id="switch-list-label-IconBefore"
                    primary="Icon Before"
                />
                <Switch
                    edge="end"
                    onChange={handleToggle("IconBefore")}
                    checked={checked.indexOf("IconBefore") !== -1}
                //   inputProps={{
                //     "aria-labelledby": "switch-list-label-bluetooth",
                //   }}
                />
            </ListItem>
            <ListItem>

                <ListItemText
                    id="switch-list-label-ShortKey"
                    primary="ShortKey"
                />
                <Switch
                    edge="end"
                    onChange={handleToggle("ShortKey")}
                    checked={checked.indexOf("ShortKey") !== -1}
                //   inputProps={{
                //     "aria-labelledby": "switch-list-label-bluetooth",
                //   }}
                />
            </ListItem>

        </List>
        // </Box>
    );
};
export default Sidebar;

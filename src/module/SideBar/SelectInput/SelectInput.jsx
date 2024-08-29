import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectInput({ prop, label, handleChange, value }) {

    const items = prop.map((item, index) => {
        return (
            <MenuItem key={index} value={item}>{item}</MenuItem>
        )
    })
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">{label}</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={value}
                label={label}
                onChange={handleChange}
            >
                <MenuItem value={prop[0]}>
                    <em>{label}</em>
                </MenuItem>
                {items}
            </Select>
        </FormControl>
    );
}
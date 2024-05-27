'use client'

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

type SelectProps = {
  helper: string,
  onChange: (value: string) => void,
  options: string[]
}

export const DownloadSelect = ({helper, onChange, options}: SelectProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': helper}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            options.map((item, idx) => (
              <MenuItem key={idx} value={item}>{item}</MenuItem>
            ))
          }
        </Select>
        <FormHelperText>{helper}</FormHelperText>
      </FormControl>
  );
};
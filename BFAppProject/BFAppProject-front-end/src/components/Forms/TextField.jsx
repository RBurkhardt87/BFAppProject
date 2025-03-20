import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

const TextField = ({ label, ...props }) => (
  <MuiTextField
    label={label}
    variant="outlined"
    margin="normal"
    sx={{
      width: '100%',
      '& .MuiOutlinedInput-root': {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgb(204, 78, 95)',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgb(204, 78, 95)',
        },
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: 'teal',
      },
    }}
    {...props}
  />
);

export default TextField;

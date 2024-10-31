import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form'

export default function MyTextField(props) {
    const {label,name,control} = props 
  return (

    <Controller 
    
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField 
          id="outlined-basic" 
          label={label} 
          variant="outlined" 
          className='w-full'
          size='small'
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}

    />
  );
}
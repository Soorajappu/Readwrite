import * as React from 'react';
import Button from '@mui/material/Button';
import clsx from 'clsx';

export default function MyButton(props) {
  const {label,type} = props 
  return (
      
    <Button type={type} variant="contained" className={clsx('w-full bg-custom-gradient')} size='small'>
        {label}
    </Button>
      
  );
}
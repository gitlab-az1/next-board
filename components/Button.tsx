import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { type SxProps, Box } from '@mui/material';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  sx?: SxProps;
}

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  sx,
  ...props
}, ref) => {
  const styles = {};

  if(!props.type) {
    props.type = 'button';
  }

  return (
    <Box
      {...props}
      component="button"
      role={props.role ?? 'button'}
      ref={ref}
      sx={Object.assign({}, sx, styles)}
    >
      {children}
    </Box>
  );
});

export default Button;
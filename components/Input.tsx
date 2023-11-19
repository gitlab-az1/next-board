import { cn } from '@utils/react';
import React, { type InputHTMLAttributes, forwardRef, useId } from 'react';


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  //
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  id,
  ...props
}, ref) => {
  const elementId = id ?? useId();

  return (
    <input
      {...props}
      className={cn('drawer-ui-input-element', className)}
      id={elementId}
      ref={ref}
    />
  );
});

export default Input;
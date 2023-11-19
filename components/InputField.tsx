import math from 'typesdk/math';
import { Box } from '@mui/material';
import type { Dict } from 'typesdk/types';
import React, { forwardRef, useId } from 'react';

import Icon, { type IconProps } from './Icon';
import Input, { type InputProps } from './Input';


type Palette = {
  bg?: string;
  A100: string;
  A200?: string;
  A300?: string;
  A400?: string;
  A500?: string;
  A600?: string;
  A700?: string;
  A800?: string;
  A900?: string;
  default: string;
  contrastText: string;
  offsetColor: string;
};

export type InputFieldProps = {
  onChange?: ((__event: React.ChangeEvent<HTMLInputElement>) => void);
  onKeyUp?: ((__event: React.KeyboardEvent<HTMLInputElement>) => void);
  onKeyDown?: ((__event: React.KeyboardEvent<HTMLInputElement>) => void);
  onClick?: ((__event: React.MouseEvent<HTMLInputElement>) => void);
  type?: InputProps['type'];
  spellCheck?: 'true' | 'false';
  autoComplete?: 'off' | Omit<string, 'off'>;
  id?: string;
  className?: string;
  icon?: IconProps['icon'];
  iconProvider?: IconProps['provider'];
  color?: 'theme' | 'success' | 'warning' | 'info' | 'danger' | Palette;
  label?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: number;
  autoFocus?: boolean;
  value?: string | number;
  labelElevationOnFocus?: string | number;
}

// eslint-disable-next-line react/display-name
const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
  const COLORS_SCHEMA: Dict<Palette> = {
    theme: {
      default: '#0f73ff',
      contrastText: '#0f0f0f',
      A100: '#0f73ff1a',
      offsetColor: '#999999',
    },
    success: {
      default: '#',
      contrastText: '#',
      A100: '#',
      offsetColor: '#',
    },
    info: {
      default: '#0f73ff',
      contrastText: '#0f0f0f',
      A100: '#0f73ff1a',
      offsetColor: '#999999',
    },
    warning: {
      default: '#',
      contrastText: '#',
      A100: '#',
      offsetColor: '#',
    },
    danger: {
      default: '#',
      contrastText: '#',
      A100: '#',
      offsetColor: '#',
    },
  };

  const id = props.id ?? useId();
  const palette: Palette = typeof props.color !== 'undefined' ?
    typeof props.color === 'string' ?
      COLORS_SCHEMA[props.color] :
      props.color :
    COLORS_SCHEMA.theme;

  return (
    <Box
      component="div"
      className="field drawer-ui-field-input-component"
      sx={{
        backgroundColor: palette.bg ?? 'transparent',
        color: palette.contrastText,
        position: 'relative',
        width: '100%',
        height: props.height ?? '38px',
        borderRadius: props.borderRadius ?? '4.2px',
        outlineColor: 'var(--theme-color)',
        outlineWidth: '2px',
        outlineOffset: '1px',

        '& > label, & > i': {
          color: palette.offsetColor,
        },

        '& > input': {
          width: '100%',
          height: '100%',
          outline: 'none',
          border: props.border ?? '1px solid var(--border-color)',
          color: palette.contrastText,
          padding: '0 7.8125px',
          paddingLeft: props.icon ? '38px' : '6.25px',
          fontSize: props.fontSize ?? '14px',
          fontWeight: props.fontWeight ?? 500,
          letterSpacing: '0.015em',
          transition: 'border-color .15s ease-in-out',
          borderRadius: 'inherit',

          '&:focus, &:valid': {
            '& ~ label': {
              transform: props.labelElevationOnFocus ? `translateY(${math.abs(parseInt(String(props.labelElevationOnFocus), 10)) * -1}px)` : 'translateY(-29px)',
              fontSize: props.fontSize ? 
                `${Number(props.fontSize.split(/\D/)[0]) - 2}px` :
                '14px',
            },
          },

          '&:focus': {
            borderColor: palette.default,

            '& ~ label, & ~ i': {
              color: palette.default,
            },
          },
        },

        '& > i': {
          position: 'absolute',
          top: '50%',
          left: '5px',
          transform: 'translateY(-50%)',
          pointerEvents: 'none !important',
          transition: 'color .15s ease-in-out',
        },

        '& > label': {
          position: 'absolute',
          top: '49%',
          left: props.icon ? '31px' : '9.375px',
          transform: 'translateY(-50%)',
          padding: '0 5px',
          backgroundColor: palette.bg ?? 'var(--box-bg)',
          color: palette.offsetColor,
          pointerEvents: 'none',
          transition: 'transform .2s ease-in-out, font-size .1s ease-in-out, color .15s ease-in-out',
          fontWeight: props.fontWeight ?? 'normal',
          fontSize: props.fontSize ?? '16px',
        },
      }}
    >
      <Input
        ref={ref}
        type={props.type ?? 'text'}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        onClick={props.onClick}
        spellCheck={props.spellCheck ?? 'false'}
        autoComplete={props.autoComplete ? props.autoComplete as string : 'off'}
        className={props.className}
        autoFocus={props.autoFocus}
        value={props.value}
        id={id}
        required
      />
      {
        props.label ? (
          <label htmlFor={id}>
            {props.label}
          </label>
        ) : '' 
      }
      {
        props.icon ? (
          <Icon
            icon={props.icon}
            provider={props.iconProvider}
            className="field__icon drawer-ui-field-input-component__icon"
          />
        ) : ''
      }
    </Box>
  );
});

export default InputField;
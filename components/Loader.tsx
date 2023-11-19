import React from 'react';
import { Box, SxProps } from '@mui/material';

import Icon from './Icon';


export type LoaderProps = {
  active?: boolean;
  color?: string;
  bg?: string;
  sx?: SxProps;
}

const Loader = (props: LoaderProps) => {
  return (
    <Box
      sx={{
        ...props.sx,
        width: '100%',
        height: '100svh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        ...(() => {
          if(!props.bg || typeof props.bg !== 'string') return {};
          return {
            backgroundColor: props.bg,
          };
        })(),

        '& > .icon': {
          fontSize: '42px',
          color: props.color ?? 'var(--text-color)',
        },
      }}
    >
      <Icon icon="bx-loader" className={props.active ? 'bx-spin' : ''} />
    </Box>
  );
};

export default Loader;
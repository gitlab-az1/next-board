import { Box, type SxProps } from '@mui/material';
import React, { useEffect } from 'react';


export type DialogProps = {
  bg?: string;
  fg?: string;
  sx?: SxProps;
  open?: boolean;
  filter?: string;
  onClose?: (() => void);
  readonly children: React.ReactNode;
}

const Dialog = (props: DialogProps) => {
  useEffect(() => {
    if(props.open === false) {
      props.onClose?.();
    }
  }, [props.open]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 800,
        isolation: 'isolate',
        opacity: props.open ? 1 : 0,
        pointerEvents: props.open ? 'auto' : 'none',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: props.bg || 'rgba(0, 0, 0, 0.068)',
          filter: props.filter ?? undefined,
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: props.fg || '#fefeff',
          border: '1px solid var(--border-color)',
          borderRadius: '4.2px',
          boxShadow: '0 1px 6px -1px rgba(0, 0, 0, .1)',

          ...props.sx,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Dialog;
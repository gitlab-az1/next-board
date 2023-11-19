import React, { HTMLAttributes, forwardRef } from 'react';
import { Box, type SxProps } from '@mui/material';
import type { Dict } from 'typesdk/types';
import { cn } from '@utils/react';


const DEFAULT_SX: Dict<SxProps> = {
  boxicons: {
    fontFamily: 'boxicons !important',
    fontWeight: 400,
    fontStyle: 'normal',
    fontFeatureSettings: 'normal',
    fontVariant: 'normal',
    lineHeight: 1,
    textRendering: 'auto',
    display: 'inline-block',
    textTransform: 'none',
    speak: 'none',
    WebkitFontSmoothing: 'antialiased',
  },
  'fonts.google': {
    fontFamily: '"Material Symbols Outlined" !important',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: 1,
    letterSpacing: 'normal',
    textTransform: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
    direction: 'ltr',
    WebkitFontFeatureSettings: '"liga"',
    WebkitFontSmoothing: 'antialiased',
  },
};

const UNICODE_DICT = {
  'calendar-clock': '"\\f540"',
  'bx-error': '"\\eac5"',
  'bx-bell': '"\\e9d2"',
  'bxs-bell': '"\\ecc9"',
  'bx-home': '"\\eb12"',
  'bx-id-card': '"\\eb1a"',
  'bx-face': '"\\ead0"',
  'bx-archive': '"\\e9b0"',
  'bx-log-out': '"\\eb4f"',
  'bx-chalkboard': '"\\ea3e"',
  'bx-user-circle': '"\\ec65"',
  'bx-ghost': '"\\eaee"',
  'id-card': '"\\ea67"',
  'bx-lock': '"\\eb49"',
  'bx-lock-alt': '"\\eb4a"',
  'bx-loader-alt': '"\\eb46"',
  'iot-device': '"\\e283"',
  'bx-menu': '"\\eb5f"',
  'box-focus': '"\\e9fe"',
  'bx-shape-square': '"\\ec00"',
  'power-plug': '"\\e63c"',
  'bx-cog': '"\\ea6e"',
  'arrow-back': '"\\e5c4"',
  'bx-arrow-back': '"\\e9b4"',
  'bx-chevron-left': '"\\ea4d"',
  'bx-plus': '"\\ebc0"',
  'bx-x': '"\\ec8d"',
  'bx-paint': '"\\eba7"',
  'bx-paint-roll': '"\\eba8"',
  'format-color-fill': '"\\e23a"',
  'menu-side-left': '"\\e9bd"',
  'bx-loader': '"\\eb45"',
  'bx-plus-circle': '"\\ebc1"',
  'bx-chevron-right': '"\\ea50"',
  'bx-chevron-down': '"\\ea4a"',
  'bx-search': '"\\ebf8"',
  'bx-search-alt': '"\\ebf9"',
  'bx-file-blank': '"\\ead6"',
  'bx-chevron-up': '"\\ea57"',
  'bx-youtube': '"\\e992"',
  'bx-link': '"\\eb3c"',
  'bx-link-alt': '"\\eb3d"',
  'bx-key': '"\\eb28"',
  'lock-open': '"\\e898"',
  'bx-server': '"\\ebfd"',
  'lock-open-right': '"\\f656"',
  'tab-close-right': '"\\f746"',
  'sportive-flag': '"\\f06e"',
  'n-board': '"\\f045"',
  'data-exploration': '"\\e76f"',
  'bx-check': '"\\ea41"',
  'shadow-add': '"\\f584"',
  'manage-search': '"\\f02f"',
  'dataset-linked': '"\\f8ef"',
  forum: '"\\e0bf"',
  chat: '"\\e0b7"',
  lock: '"\\e897"',
  topic: '"\\e8de"',
  dashboard: '"\\e871"',
  database: '"\\f20e"',
  analytics: '"\\e4fc"',
  bolt: '"\\ea0b"',
  menu: '"\\e5d2"',
  flow: '"\\e97a"',
  save: '"\\e161"',
  dns: '"\\e875"',
  cases: '"\\e992"',
  label: '"\\e892"',
  hashtag: '"\\eac7"',
  timer: '"\\e425"',
};

const UNICODE_ICON_ALIAS = {};



export interface IconProps extends HTMLAttributes<HTMLElement> {
  provider?: 'boxicons' | 'fonts.google';
  icon?: keyof typeof UNICODE_DICT | keyof typeof UNICODE_ICON_ALIAS;
}


/* eslint-disable-next-line react/display-name */
const Icon = forwardRef<HTMLElement, IconProps>(({ provider, icon, className, color, ...props }: IconProps, ref) => {
  const i: string = (icon ?
    Object.keys(UNICODE_ICON_ALIAS).includes(icon as string)
      ? (UNICODE_ICON_ALIAS as Dict<string>)[icon]
      : icon
    : 'bx-error') as unknown as string;

  const p = provider && ['boxicons', 'fonts.google'].includes(provider) ?
    provider :
    (
      i.startsWith('bx-') ||
      i.startsWith('bxs-')
    ) ?
      'boxicons' :
      'fonts.google';

  return (
    <Box
      { ...props }
      component="i"
      role={props.role ?? 'icon'}
      ref={ref}
      className={cn('icon', 'drawer-ui-icon-element', className)}
      sx={Object.assign({}, {
        '&::before': {
          content: UNICODE_DICT[i as unknown as keyof typeof UNICODE_DICT],
        },

        color,
      }, DEFAULT_SX[p])}
    />
  );
});

export default Icon;
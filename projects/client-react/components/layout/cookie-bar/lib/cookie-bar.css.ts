import { style } from '@vanilla-extract/css';

import { zIndex } from '@/styles/vars.css';

export const wrapper = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  padding: '15px 20px 15px',
  zIndex: zIndex.cookie,
  position: 'fixed',
  left: '0',
  bottom: '0',
  right: '0',
  backgroundColor: '#f5f5f5',
  justifyContent: 'center',
  alignItems: 'center',
});

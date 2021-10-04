import { style } from '@vanilla-extract/css';


export const globalVariableNames = {
  // no image
  noImageBackground: '--no-image-background',
};

export const zIndex = {
  hide: -1,
  sticky: 1,
  overlapDefault: 1,
  cookie: 50,
  modalOverlay: 100,
};

export const mobileHorizontalGaps = style({
  paddingLeft: '20px',
  paddingRight: '20px',
});


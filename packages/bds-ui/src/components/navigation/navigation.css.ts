import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '../../styles/theme.css';

export const navigationVariants = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
    height: '4.8rem',
  },
  variants: {
    backgroundColor: {
      white: { backgroundColor: themeVars.color.whiteBackground },
      primary: { backgroundColor: themeVars.color.primary500 },
      gradient_primary: { background: themeVars.color.gradientPrimary },
      transparent: { backgroundColor: 'transparent' },
    },
  },
  defaultVariants: {
    backgroundColor: 'transparent',
  },
});

export const title = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  textAlign: 'center',
  ...themeVars.fontStyles.title_sb_16,
});

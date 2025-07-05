import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '../../styles';

export const tabContainer = style({
  ...themeVars.fontStyles.title_sb_18,
  color: themeVars.color.gray400,
  width: '37.5rem',
  height: '4rem',
  display: 'flex',
  justifyContent: 'center',
  padding: '0 1.6rem',
});

export const tabList = style({
  display: 'flex',
  gap: '1rem',
  width: '100%',
  justifyContent: 'space-around',
});

export const tabItem = recipe({
  base: {
    width: '100%',
    textAlign: 'center',
    paddingTop: '0.25rem',
    cursor: 'pointer',
  },
  variants: {
    selected: {
      true: {
        ...themeVars.fontStyles.head_eb_18,
        color: themeVars.color.gray900,
      },
    },
  },
});

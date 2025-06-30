import { style } from '@vanilla-extract/css';

import { themeVars } from 'node_modules/@bds/ui/src/styles/theme.css';

export const container = style({
  ...themeVars.fontStyles.body1_m_12,
  color: themeVars.color.gray100,
});

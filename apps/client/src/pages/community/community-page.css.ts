import { themeVars } from '@bds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  ...themeVars.fontStyles.title_sb_14,
  color: themeVars.color.primary800,
});

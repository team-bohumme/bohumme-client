import { createTheme } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { fontStyles } from './tokens/font-style';
import { typography } from './tokens/typography';

import { color } from './tokens/color.css';

const tokens = {
  color: color,
  fontStyles: fontStyles,
  ...typography,
};

const properties = defineProperties({
  properties: tokens,
});
const sprinkles = createSprinkles(properties);

const [themeClass, themeVars] = createTheme(tokens);

export { sprinkles, themeClass, themeVars, tokens };

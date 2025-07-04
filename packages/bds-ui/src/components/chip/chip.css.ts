import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '../../styles/theme.css';

export const chipVariants = recipe({
  base: [
    themeVars.fontStyles.body1_m_12,
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: themeVars.color.gray800,
    },
  ],
  variants: {
    color: {
      gray: { color: themeVars.color.whiteBackground },
      primary: { color: themeVars.color.primary200 },
    },
    size: {
      rectangular: {
        padding: '0.4rem 1rem',
        borderRadius: '0.6rem',
      },
      rounded: {
        padding: '0.6rem 1.2rem',
        borderRadius: '5rem',
      },
    },
    outline: {
      true: {
        border: `1px solid ${themeVars.color.gray100}`,
      },
      false: {},
    },
  },
  defaultVariants: {
    color: 'gray',
    size: 'rectangular',
    outline: false,
  },
});

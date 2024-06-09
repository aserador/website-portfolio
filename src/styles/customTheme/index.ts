import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';
import { createColorVariables } from './colors';

function flattenColors(colors: Record<string, any>): Record<string, string> {
  return Object.entries(colors).reduce((acc, [colorName, colorValue]) => {
    if (typeof colorValue === 'string') {
      return { ...acc, [colorName]: colorValue };
    } else if (typeof colorValue === 'object') {
      const flattened = flattenColors(colorValue);
      return { ...acc, ...Object.entries(flattened).reduce((acc2, [nestedColorName, nestedColorValue]) => {
        return { ...acc2, [`${colorName}-${nestedColorName}`]: nestedColorValue };
      }, {}) };
    }
    return acc;
  }, {});
}

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
  styles: {
    global: (props: Record<string, unknown>) => ({
      ':root': {
        ...createColorVariables(flattenColors(colors)),
      },
      '*::selection': {
        color: mode('#fff', 'rgb(17, 17, 17)')(props),
        background: mode(
          'rgb(17, 17, 17) none repeat scroll 0% 0%',
          'rgb(255, 255, 255) none repeat scroll 0% 0%'
        )(props),
      },

      body: {
        fontFamily: 'body',
        color: mode('#212529', '#f8f9fa')(props),
        bg: mode('#f8f9fa', '#111111')(props),
        lineHeight: 'base',
        transitionProperty: 'background-color, color',
        transitionDuration: '300ms',
      },
    }),
  },
});

export default customTheme;

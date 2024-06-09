import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
};
const tealExtendedColors: DeepPartial<
  Record<string, Theme['colors']['teal']>
> = {
  teal: {
    100: '#B2F5EA',
    200: '#81E6D9',
    300: '#4FD1C5',
    400: '#38B2AC',
    500: '#319795',
    600: '#2C7A7B',
    700: '#285E61',
    800: '#234E52',
    900: '#1D4044',
  },
};
/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
  ...tealExtendedColors,
};

export const createColorVariables = (colors: Record<string, string>) => {
  return Object.entries(colors).reduce((acc, [colorName, colorValue]) => {
    return { ...acc, [`--${colorName}`]: colorValue };
  }, {});
};

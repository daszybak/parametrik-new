import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: 'Roboto, sans-serif',
  cursorType: 'pointer',
  colors: {
    primary: [
      '#DCE2E2',
      '#AEC3C1',
      '#81B0AC',
      '#69ADA7',
      '#50ACA4',
      '#50938D',
      '#4E7E7A',
      '#4B6D6A',
      '#465F5D',
      '#3D4948',
    ],
    secondary: [
      '#313E4F',
      '#223348',
      '#132944',
      '#0B2544',
      '#042144',
      '#091E37',
      '#0D1C2E',
      '#0E1926',
      '#0F1720',
      '#0F1318',
    ],
  },
  fontSizes: {
    xs: 16,
    sm: 16,
    md: 21,
    lg: 25,
    xl: 32,
  },
  defaultGradient: {
    from: '#e9b7ce',
    to: '#d3f3f1',
    deg: -45,
  },
  headings: {
    // properties for all headings
    fontWeight: 400,
    fontFamily: 'Roboto',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontSize: 'xl' },
      h2: { fontSize: 'lg' },
      h3: { fontSize: 'md' },
      h4: { fontSize: 'sm' },
      h5: { fontSize: 'sm' },
      h6: { fontSize: 'sm' },
    },
  },
};

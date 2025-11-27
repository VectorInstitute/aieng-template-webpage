'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      // Primary colors
      magenta: '#EB088A',
      black: '#000000',
      grey: '#E9E8E8',
      // Secondary colors
      cobalt: '#313CFF',
      violet: '#8A25C9',
      turquoise: '#48C0D9',
      tangerine: '#FF9E00',
      lime: '#CFF933',
    },
  },
  fonts: {
    heading: `'Karbon', 'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'white',
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

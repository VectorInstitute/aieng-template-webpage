'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          magenta: { value: '#EB088A' },
          black: { value: '#000000' },
          grey: { value: '#E9E8E8' },
          cobalt: { value: '#313CFF' },
          violet: { value: '#8A25C9' },
          turquoise: { value: '#48C0D9' },
          tangerine: { value: '#FF9E00' },
          lime: { value: '#CFF933' },
        },
      },
      fonts: {
        heading: { value: `'Karbon', 'Open Sans', sans-serif` },
        body: { value: `'Open Sans', sans-serif` },
      },
    },
  },
  globalCss: {
    'html, body': {
      bg: 'white',
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}

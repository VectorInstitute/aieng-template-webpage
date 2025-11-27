import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'vector-magenta': '#EB088A',
        'vector-black': '#000000',
        'vector-grey': '#E9E8E8',
        // Secondary colors
        'vector-cobalt': '#313CFF',
        'vector-violet': '#8A25C9',
        'vector-turquoise': '#48C0D9',
        'vector-tangerine': '#FF9E00',
        'vector-lime': '#CFF933',
      },
      fontFamily: {
        'karbon': ['Karbon', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

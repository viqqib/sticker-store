import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        greenst: '#036434',
        greensthov: '#00391D',
        creamst: '#FFFEF8',
        labelg: '#38845D',
        redradio: '#F25E5E',
        greenradio: '#6BE88E',
        blueradio: '#5ECEF2',
        yellowradio: '#E7D780',
        blackradio: '#252B2D',
        focus: '#38BBBB',
        redKoala: "#F25E5E",
        stickered: "#E0593D",
        stickeryellow: "#FEC50A",
        footercolor: '#004222',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
      textShadow: {
        custom: '3px 3px 0px rgba(208, 97, 70, 1)',
      },
      variants: {
        extend: {
          transform: ['responsive', 'hover'],
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          'text-shadow': '3px 3px 0px rgba(208, 97, 70, 1)',
        },
      });
    }),
  ],
};

export default config;

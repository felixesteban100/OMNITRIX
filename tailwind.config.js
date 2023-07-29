/** @type {import('tailwindcss').Config} */

import { BEN10_KEYFRAMES, BEN10_ANIMATIONS, BEN10_THEMES } from './src/assets/ben10Tailwind_customization';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleInCenter: {
          '0%': {
            transform: 'scale(0)',
            opacity: '1'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        slideInBack: {
          '0%': {
            transform: 'translateZ(600px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateZ(0px)',
            opacity: '1'
          }
        },
        puffInCenter: {
          '0%': {
            transform: 'scale(2)',
            filter: 'blur(4px)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            filter: 'blur(0px)',
            opacity: '1'
          }
        },
        trackingInExpand: {
          '0%': {
            letterSpacing: '-0.5em',
            opacity: '0'
          },
          '40%': {
            opacity: '0.6'
          },
          '100%': {
            opacity: '1'
          }
        },
        scaleInHorizontalLeft: {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: '0% 0%',
            opacity: '0'
          },
          '100%': {
            transform: 'scaleX(1)',
            transformOrigin: '0% 0%',
            opacity: '1'
          }
        },
        scaleOutCenter: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1'
          },
          '100%': {
            transform: 'scale(0)',
            opacity: '1'
          }
        },
        clockBorder: {
          '0%': {
            // width: '0',
            // height: '0',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
          },
          '25%': {
            // width: 0,
            // height: 0,
            borderBottomColor: "theme('colors.primary')",
            borderLeftColor: 'transparent',
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
          },
          '50%': {
            // width: '100%',
            // height: '100%',
            borderBottomColor: "theme('colors.primary')",
            borderLeftColor: "theme('colors.primary')",
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
          },
          '75%': {
            // width: 0,
            // height: 0,
            borderBottomColor: "theme('colors.primary')",
            borderLeftColor: "theme('colors.primary')",
            borderTopColor: "theme('colors.primary')",
            borderRightColor: 'transparent',
          },
          '100%': {
            // width: '100%',
            // height: '100%',
            borderBottomColor: "theme('colors.primary')",
            borderLeftColor: "theme('colors.primary')",
            borderTopColor: "theme('colors.primary')",
            borderRightColor: 'transparent',
          }
        },
        slideInBottom: {
          '0%': {
            transform: 'translateY(100px)',
            // opacity: 0,
          },
          '50%': {
            transform: 'translateY(50px)',
            // opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            // opacity: 1,
          },
        },
        slideInTop: {
          '0%': {
            transform: 'translateY(-100px)',
            // opacity: 0,
          },
          '50%': {
            transform: 'translateY(-50px)',
            // opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            // opacity: 1,
          },
        },
        fadeIn: { "0%": { opacity: 0, }, "100%": { opacity: 1, } },
        fadeOut: { "0%": { opacity: 1, }, "100%": { opacity: 0 } },

        /* BEN 10 */
        ...BEN10_KEYFRAMES,
        /* BEN 10 */

      },
      animation: {
        'spin-once': 'spin 1s linear 1 forwards',
        'spin-once2': 'spin 1s linear 1 forwards',
        'scaleInCenter': 'scaleInCenter 1s ease-in-out 1',
        'slideInBack': 'slideInBack 3s both',
        'puffInCenter': 'puffInCenter 0.7s ease-in-out 1',
        'trackingInExpand': 'trackingInExpand 3s ease-in-out 1',
        'scaleInHorizontalLeft': 'scaleInHorizontalLeft 5s ease-in-out 1',
        'scaleOutCenter': 'scaleOutCenter 1s ease-in-out 1 forwards',
        'clockBorder': 'clockBorder 2s ease-in-out forwards',
        'slideInBottom': "slideInBottom 1s both",
        'slideInTop': "slideInTop 1s both",
        'shakeHorizontal-1': 'shakeHorizontal 2s ease-in-out 1',

        /* BEN 10 */
        ...BEN10_ANIMATIONS,
        /* BEN 10 */
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      BEN10_THEMES
    ],
  },

}
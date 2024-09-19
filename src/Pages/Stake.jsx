import React from "react";
import "../css/stake2.css";

export default function Stake() {
  return (
    <>
      <style
        data-href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap"
        dangerouslySetInnerHTML={{
          __html:
            "\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 400;\n      font-display: swap;\n      src: url(fonts/pxiEyp8kv8JHgFVrFJM.woff) format('woff')\n    }\n\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 700;\n      font-display: swap;\n      src: url(fonts/pxiByp8kv8JHgFVrLCz7V1g.woff) format('woff')\n    }\n\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 900;\n      font-display: swap;\n      src: url(fonts/pxiByp8kv8JHgFVrLBT5V1g.woff) format('woff')\n    }\n\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 400;\n      font-display: swap;\n      src: url(fonts/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format('woff2');\n      unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF\n    }\n\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 400;\n      font-display: swap;\n      src: url(fonts/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');\n      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF\n    }\n\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 400;\n      font-display: swap;\n      src: url(fonts/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');\n      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD\n    }\n\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 700;\n      font-display: swap;\n      src: url(fonts/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2) format('woff2');\n      unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF\n    }\n\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 700;\n      font-display: swap;\n      src: url(fonts/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2) format('woff2');\n      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF\n    }\n\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 700;\n      font-display: swap;\n      src: url(fonts/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format('woff2');\n      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD\n    }\n\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 900;\n      font-display: swap;\n      src: url(fonts/pxiByp8kv8JHgFVrLBT5Z11lFd2JQEl8qw.woff2) format('woff2');\n      unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF\n    }\n\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 900;\n      font-display: swap;\n      src: url(fonts/pxiByp8kv8JHgFVrLBT5Z1JlFd2JQEl8qw.woff2) format('woff2');\n      unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF\n    }\n\n    @font-face {\n      font-family: 'Poppins';\n      font-style: normal;\n      font-weight: 900;\n      font-display: swap;\n      src: url(fonts/pxiByp8kv8JHgFVrLBT5Z1xlFd2JQEk.woff2) format('woff2');\n      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD\n    }\n  ",
        }}
      />

      <div id="__next" className="bag">
        <style
          data-emotion="css-global 1aw5p5a"
          dangerouslySetInnerHTML={{
            __html:
              '\n      :host,\n      :root {\n        --chakra-ring-inset: var(--chakra-empty,\n            /*!*/\n            /*!*/\n          );\n        --chakra-ring-offset-width: 0px;\n        --chakra-ring-offset-color: #fff;\n        --chakra-ring-color: rgba(66, 153, 225, 0.6);\n        --chakra-ring-offset-shadow: 0 0 #0000;\n        --chakra-ring-shadow: 0 0 #0000;\n        --chakra-space-x-reverse: 0;\n        --chakra-space-y-reverse: 0;\n        --chakra-colors-transparent: transparent;\n        --chakra-colors-current: currentColor;\n        --chakra-colors-black: #000000;\n        --chakra-colors-white: #FFFFFF;\n        --chakra-colors-whiteAlpha-50: rgba(255, 255, 255, 0.04);\n        --chakra-colors-whiteAlpha-100: rgba(255, 255, 255, 0.06);\n        --chakra-colors-whiteAlpha-200: rgba(255, 255, 255, 0.08);\n        --chakra-colors-whiteAlpha-300: rgba(255, 255, 255, 0.16);\n        --chakra-colors-whiteAlpha-400: rgba(255, 255, 255, 0.24);\n        --chakra-colors-whiteAlpha-500: rgba(255, 255, 255, 0.36);\n        --chakra-colors-whiteAlpha-600: rgba(255, 255, 255, 0.48);\n        --chakra-colors-whiteAlpha-700: rgba(255, 255, 255, 0.64);\n        --chakra-colors-whiteAlpha-800: rgba(255, 255, 255, 0.80);\n        --chakra-colors-whiteAlpha-900: rgba(255, 255, 255, 0.92);\n        --chakra-colors-blackAlpha-50: rgba(0, 0, 0, 0.04);\n        --chakra-colors-blackAlpha-100: rgba(0, 0, 0, 0.06);\n        --chakra-colors-blackAlpha-200: rgba(0, 0, 0, 0.08);\n        --chakra-colors-blackAlpha-300: rgba(0, 0, 0, 0.16);\n        --chakra-colors-blackAlpha-400: rgba(0, 0, 0, 0.24);\n        --chakra-colors-blackAlpha-500: rgba(0, 0, 0, 0.36);\n        --chakra-colors-blackAlpha-600: rgba(0, 0, 0, 0.48);\n        --chakra-colors-blackAlpha-700: rgba(0, 0, 0, 0.64);\n        --chakra-colors-blackAlpha-800: rgba(0, 0, 0, 0.80);\n        --chakra-colors-blackAlpha-900: rgba(0, 0, 0, 0.92);\n        --chakra-colors-gray-50: #F7FAFC;\n        --chakra-colors-gray-100: #EDF2F7;\n        --chakra-colors-gray-200: #E2E8F0;\n        --chakra-colors-gray-300: #CBD5E0;\n        --chakra-colors-gray-400: #A0AEC0;\n        --chakra-colors-gray-500: #718096;\n        --chakra-colors-gray-600: #4A5568;\n        --chakra-colors-gray-700: #2D3748;\n        --chakra-colors-gray-800: #1A202C;\n        --chakra-colors-gray-900: #171923;\n        --chakra-colors-red-50: #FFF5F5;\n        --chakra-colors-red-100: #FED7D7;\n        --chakra-colors-red-200: #FEB2B2;\n        --chakra-colors-red-300: #FC8181;\n        --chakra-colors-red-400: #F56565;\n        --chakra-colors-red-500: #E53E3E;\n        --chakra-colors-red-600: #C53030;\n        --chakra-colors-red-700: #9B2C2C;\n        --chakra-colors-red-800: #822727;\n        --chakra-colors-red-900: #63171B;\n        --chakra-colors-orange-50: #FFFAF0;\n        --chakra-colors-orange-100: #FEEBC8;\n        --chakra-colors-orange-200: #FBD38D;\n        --chakra-colors-orange-300: #F6AD55;\n        --chakra-colors-orange-400: #ED8936;\n        --chakra-colors-orange-500: #DD6B20;\n        --chakra-colors-orange-600: #C05621;\n        --chakra-colors-orange-700: #9C4221;\n        --chakra-colors-orange-800: #7B341E;\n        --chakra-colors-orange-900: #652B19;\n        --chakra-colors-yellow-50: #FFFFF0;\n        --chakra-colors-yellow-100: #FEFCBF;\n        --chakra-colors-yellow-200: #FAF089;\n        --chakra-colors-yellow-300: #F6E05E;\n        --chakra-colors-yellow-400: #ECC94B;\n        --chakra-colors-yellow-500: #D69E2E;\n        --chakra-colors-yellow-600: #B7791F;\n        --chakra-colors-yellow-700: #975A16;\n        --chakra-colors-yellow-800: #744210;\n        --chakra-colors-yellow-900: #5F370E;\n        --chakra-colors-green-50: #F0FFF4;\n        --chakra-colors-green-100: #C6F6D5;\n        --chakra-colors-green-200: #9AE6B4;\n        --chakra-colors-green-300: #68D391;\n        --chakra-colors-green-400: #48BB78;\n        --chakra-colors-green-500: #38A169;\n        --chakra-colors-green-600: #2F855A;\n        --chakra-colors-green-700: #276749;\n        --chakra-colors-green-800: #22543D;\n        --chakra-colors-green-900: #1C4532;\n        --chakra-colors-teal-50: #E6FFFA;\n        --chakra-colors-teal-100: #B2F5EA;\n        --chakra-colors-teal-200: #81E6D9;\n        --chakra-colors-teal-300: #4FD1C5;\n        --chakra-colors-teal-400: #38B2AC;\n        --chakra-colors-teal-500: #319795;\n        --chakra-colors-teal-600: #2C7A7B;\n        --chakra-colors-teal-700: #285E61;\n        --chakra-colors-teal-800: #234E52;\n        --chakra-colors-teal-900: #1D4044;\n        --chakra-colors-blue-50: #ebf8ff;\n        --chakra-colors-blue-100: #bee3f8;\n        --chakra-colors-blue-200: #90cdf4;\n        --chakra-colors-blue-300: #63b3ed;\n        --chakra-colors-blue-400: #4299e1;\n        --chakra-colors-blue-500: #3182ce;\n        --chakra-colors-blue-600: #2b6cb0;\n        --chakra-colors-blue-700: #2c5282;\n        --chakra-colors-blue-800: #2a4365;\n        --chakra-colors-blue-900: #1A365D;\n        --chakra-colors-cyan-50: #EDFDFD;\n        --chakra-colors-cyan-100: #C4F1F9;\n        --chakra-colors-cyan-200: #9DECF9;\n        --chakra-colors-cyan-300: #76E4F7;\n        --chakra-colors-cyan-400: #0BC5EA;\n        --chakra-colors-cyan-500: #00B5D8;\n        --chakra-colors-cyan-600: #00A3C4;\n        --chakra-colors-cyan-700: #0987A0;\n        --chakra-colors-cyan-800: #086F83;\n        --chakra-colors-cyan-900: #065666;\n        --chakra-colors-purple-50: #FAF5FF;\n        --chakra-colors-purple-100: #E9D8FD;\n        --chakra-colors-purple-200: #D6BCFA;\n        --chakra-colors-purple-300: #B794F4;\n        --chakra-colors-purple-400: #9F7AEA;\n        --chakra-colors-purple-500: #805AD5;\n        --chakra-colors-purple-600: #6B46C1;\n        --chakra-colors-purple-700: #553C9A;\n        --chakra-colors-purple-800: #44337A;\n        --chakra-colors-purple-900: #322659;\n        --chakra-colors-pink-50: #FFF5F7;\n        --chakra-colors-pink-100: #FED7E2;\n        --chakra-colors-pink-200: #FBB6CE;\n        --chakra-colors-pink-300: #F687B3;\n        --chakra-colors-pink-400: #ED64A6;\n        --chakra-colors-pink-500: #D53F8C;\n        --chakra-colors-pink-600: #B83280;\n        --chakra-colors-pink-700: #97266D;\n        --chakra-colors-pink-800: #702459;\n        --chakra-colors-pink-900: #521B41;\n        --chakra-colors-linkedin-50: #E8F4F9;\n        --chakra-colors-linkedin-100: #CFEDFB;\n        --chakra-colors-linkedin-200: #9BDAF3;\n        --chakra-colors-linkedin-300: #68C7EC;\n        --chakra-colors-linkedin-400: #34B3E4;\n        --chakra-colors-linkedin-500: #00A0DC;\n        --chakra-colors-linkedin-600: #008CC9;\n        --chakra-colors-linkedin-700: #0077B5;\n        --chakra-colors-linkedin-800: #005E93;\n        --chakra-colors-linkedin-900: #004471;\n        --chakra-colors-facebook-50: #E8F4F9;\n        --chakra-colors-facebook-100: #D9DEE9;\n        --chakra-colors-facebook-200: #B7C2DA;\n        --chakra-colors-facebook-300: #6482C0;\n        --chakra-colors-facebook-400: #4267B2;\n        --chakra-colors-facebook-500: #385898;\n        --chakra-colors-facebook-600: #314E89;\n        --chakra-colors-facebook-700: #29487D;\n        --chakra-colors-facebook-800: #223B67;\n        --chakra-colors-facebook-900: #1E355B;\n        --chakra-colors-messenger-50: #D0E6FF;\n        --chakra-colors-messenger-100: #B9DAFF;\n        --chakra-colors-messenger-200: #A2CDFF;\n        --chakra-colors-messenger-300: #7AB8FF;\n        --chakra-colors-messenger-400: #2E90FF;\n        --chakra-colors-messenger-500: #0078FF;\n        --chakra-colors-messenger-600: #0063D1;\n        --chakra-colors-messenger-700: #0052AC;\n        --chakra-colors-messenger-800: #003C7E;\n        --chakra-colors-messenger-900: #002C5C;\n        --chakra-colors-whatsapp-50: #dffeec;\n        --chakra-colors-whatsapp-100: #b9f5d0;\n        --chakra-colors-whatsapp-200: #90edb3;\n        --chakra-colors-whatsapp-300: #65e495;\n        --chakra-colors-whatsapp-400: #3cdd78;\n        --chakra-colors-whatsapp-500: #22c35e;\n        --chakra-colors-whatsapp-600: #179848;\n        --chakra-colors-whatsapp-700: #0c6c33;\n        --chakra-colors-whatsapp-800: #01421c;\n        --chakra-colors-whatsapp-900: #001803;\n        --chakra-colors-twitter-50: #E5F4FD;\n        --chakra-colors-twitter-100: #C8E9FB;\n        --chakra-colors-twitter-200: #A8DCFA;\n        --chakra-colors-twitter-300: #83CDF7;\n        --chakra-colors-twitter-400: #57BBF5;\n        --chakra-colors-twitter-500: #1DA1F2;\n        --chakra-colors-twitter-600: #1A94DA;\n        --chakra-colors-twitter-700: #1681BF;\n        --chakra-colors-twitter-800: #136B9E;\n        --chakra-colors-twitter-900: #0D4D71;\n        --chakra-colors-telegram-50: #E3F2F9;\n        --chakra-colors-telegram-100: #C5E4F3;\n        --chakra-colors-telegram-200: #A2D4EC;\n        --chakra-colors-telegram-300: #7AC1E4;\n        --chakra-colors-telegram-400: #47A9DA;\n        --chakra-colors-telegram-500: #0088CC;\n        --chakra-colors-telegram-600: #007AB8;\n        --chakra-colors-telegram-700: #006BA1;\n        --chakra-colors-telegram-800: #005885;\n        --chakra-colors-telegram-900: #003F5E;\n        --chakra-colors-brand-100: #f7fafc;\n        --chakra-borders-none: 0;\n        --chakra-borders-1px: 1px solid;\n        --chakra-borders-2px: 2px solid;\n        --chakra-borders-4px: 4px solid;\n        --chakra-borders-8px: 8px solid;\n        --chakra-fonts-heading: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n        --chakra-fonts-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n        --chakra-fonts-mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n        --chakra-fontSizes-xs: 0.75rem;\n        --chakra-fontSizes-sm: 0.875rem;\n        --chakra-fontSizes-md: 1rem;\n        --chakra-fontSizes-lg: 1.125rem;\n        --chakra-fontSizes-xl: 1.25rem;\n        --chakra-fontSizes-2xl: 1.5rem;\n        --chakra-fontSizes-3xl: 1.875rem;\n        --chakra-fontSizes-4xl: 2.25rem;\n        --chakra-fontSizes-5xl: 3rem;\n        --chakra-fontSizes-6xl: 3.75rem;\n        --chakra-fontSizes-7xl: 4.5rem;\n        --chakra-fontSizes-8xl: 6rem;\n        --chakra-fontSizes-9xl: 8rem;\n        --chakra-fontWeights-hairline: 100;\n        --chakra-fontWeights-thin: 200;\n        --chakra-fontWeights-light: 300;\n        --chakra-fontWeights-normal: 400;\n        --chakra-fontWeights-medium: 500;\n        --chakra-fontWeights-semibold: 600;\n        --chakra-fontWeights-bold: 700;\n        --chakra-fontWeights-extrabold: 800;\n        --chakra-fontWeights-black: 900;\n        --chakra-letterSpacings-tighter: -0.05em;\n        --chakra-letterSpacings-tight: -0.025em;\n        --chakra-letterSpacings-normal: 0;\n        --chakra-letterSpacings-wide: 0.025em;\n        --chakra-letterSpacings-wider: 0.05em;\n        --chakra-letterSpacings-widest: 0.1em;\n        --chakra-lineHeights-3: .75rem;\n        --chakra-lineHeights-4: 1rem;\n        --chakra-lineHeights-5: 1.25rem;\n        --chakra-lineHeights-6: 1.5rem;\n        --chakra-lineHeights-7: 1.75rem;\n        --chakra-lineHeights-8: 2rem;\n        --chakra-lineHeights-9: 2.25rem;\n        --chakra-lineHeights-10: 2.5rem;\n        --chakra-lineHeights-normal: normal;\n        --chakra-lineHeights-none: 1;\n        --chakra-lineHeights-shorter: 1.25;\n        --chakra-lineHeights-short: 1.375;\n        --chakra-lineHeights-base: 1.5;\n        --chakra-lineHeights-tall: 1.625;\n        --chakra-lineHeights-taller: 2;\n        --chakra-radii-none: 0;\n        --chakra-radii-sm: 0.125rem;\n        --chakra-radii-base: 0.25rem;\n        --chakra-radii-md: 0.375rem;\n        --chakra-radii-lg: 0.5rem;\n        --chakra-radii-xl: 0.75rem;\n        --chakra-radii-2xl: 1rem;\n        --chakra-radii-3xl: 1.5rem;\n        --chakra-radii-full: 9999px;\n        --chakra-space-1: 0.25rem;\n        --chakra-space-2: 0.5rem;\n        --chakra-space-3: 0.75rem;\n        --chakra-space-4: 1rem;\n        --chakra-space-5: 1.25rem;\n        --chakra-space-6: 1.5rem;\n        --chakra-space-7: 1.75rem;\n        --chakra-space-8: 2rem;\n        --chakra-space-9: 2.25rem;\n        --chakra-space-10: 2.5rem;\n        --chakra-space-12: 3rem;\n        --chakra-space-14: 3.5rem;\n        --chakra-space-16: 4rem;\n        --chakra-space-20: 5rem;\n        --chakra-space-24: 6rem;\n        --chakra-space-28: 7rem;\n        --chakra-space-32: 8rem;\n        --chakra-space-36: 9rem;\n        --chakra-space-40: 10rem;\n        --chakra-space-44: 11rem;\n        --chakra-space-48: 12rem;\n        --chakra-space-52: 13rem;\n        --chakra-space-56: 14rem;\n        --chakra-space-60: 15rem;\n        --chakra-space-64: 16rem;\n        --chakra-space-72: 18rem;\n        --chakra-space-80: 20rem;\n        --chakra-space-96: 24rem;\n        --chakra-space-px: 1px;\n        --chakra-space-0\\.5: 0.125rem;\n        --chakra-space-1\\.5: 0.375rem;\n        --chakra-space-2\\.5: 0.625rem;\n        --chakra-space-3\\.5: 0.875rem;\n        --chakra-shadows-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);\n        --chakra-shadows-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n        --chakra-shadows-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n        --chakra-shadows-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n        --chakra-shadows-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n        --chakra-shadows-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n        --chakra-shadows-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n        --chakra-shadows-outline: 0 0 0 3px rgba(66, 153, 225, 0.6);\n        --chakra-shadows-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n        --chakra-shadows-none: none;\n        --chakra-shadows-dark-lg: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px;\n        --chakra-sizes-1: 0.25rem;\n        --chakra-sizes-2: 0.5rem;\n        --chakra-sizes-3: 0.75rem;\n        --chakra-sizes-4: 1rem;\n        --chakra-sizes-5: 1.25rem;\n        --chakra-sizes-6: 1.5rem;\n        --chakra-sizes-7: 1.75rem;\n        --chakra-sizes-8: 2rem;\n        --chakra-sizes-9: 2.25rem;\n        --chakra-sizes-10: 2.5rem;\n        --chakra-sizes-12: 3rem;\n        --chakra-sizes-14: 3.5rem;\n        --chakra-sizes-16: 4rem;\n        --chakra-sizes-20: 5rem;\n        --chakra-sizes-24: 6rem;\n        --chakra-sizes-28: 7rem;\n        --chakra-sizes-32: 8rem;\n        --chakra-sizes-36: 9rem;\n        --chakra-sizes-40: 10rem;\n        --chakra-sizes-44: 11rem;\n        --chakra-sizes-48: 12rem;\n        --chakra-sizes-52: 13rem;\n        --chakra-sizes-56: 14rem;\n        --chakra-sizes-60: 15rem;\n        --chakra-sizes-64: 16rem;\n        --chakra-sizes-72: 18rem;\n        --chakra-sizes-80: 20rem;\n        --chakra-sizes-96: 24rem;\n        --chakra-sizes-px: 1px;\n        --chakra-sizes-0\\.5: 0.125rem;\n        --chakra-sizes-1\\.5: 0.375rem;\n        --chakra-sizes-2\\.5: 0.625rem;\n        --chakra-sizes-3\\.5: 0.875rem;\n        --chakra-sizes-max: max-content;\n        --chakra-sizes-min: min-content;\n        --chakra-sizes-full: 100%;\n        --chakra-sizes-3xs: 14rem;\n        --chakra-sizes-2xs: 16rem;\n        --chakra-sizes-xs: 20rem;\n        --chakra-sizes-sm: 24rem;\n        --chakra-sizes-md: 28rem;\n        --chakra-sizes-lg: 32rem;\n        --chakra-sizes-xl: 36rem;\n        --chakra-sizes-2xl: 42rem;\n        --chakra-sizes-3xl: 48rem;\n        --chakra-sizes-4xl: 56rem;\n        --chakra-sizes-5xl: 64rem;\n        --chakra-sizes-6xl: 72rem;\n        --chakra-sizes-7xl: 80rem;\n        --chakra-sizes-8xl: 90rem;\n        --chakra-sizes-container-sm: 640px;\n        --chakra-sizes-container-md: 768px;\n        --chakra-sizes-container-lg: 1024px;\n        --chakra-sizes-container-xl: 1280px;\n        --chakra-zIndices-hide: -1;\n        --chakra-zIndices-auto: auto;\n        --chakra-zIndices-base: 0;\n        --chakra-zIndices-docked: 10;\n        --chakra-zIndices-dropdown: 1000;\n        --chakra-zIndices-sticky: 1100;\n        --chakra-zIndices-banner: 1200;\n        --chakra-zIndices-overlay: 1300;\n        --chakra-zIndices-modal: 1400;\n        --chakra-zIndices-popover: 1500;\n        --chakra-zIndices-skipLink: 1600;\n        --chakra-zIndices-toast: 1700;\n        --chakra-zIndices-tooltip: 1800;\n        --chakra-transition-property-common: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n        --chakra-transition-property-colors: background-color, border-color, color, fill, stroke;\n        --chakra-transition-property-dimensions: width, height;\n        --chakra-transition-property-position: left, right, top, bottom;\n        --chakra-transition-property-background: background-color, background-image, background-position;\n        --chakra-transition-easing-ease-in: cubic-bezier(0.4, 0, 1, 1);\n        --chakra-transition-easing-ease-out: cubic-bezier(0, 0, 0.2, 1);\n        --chakra-transition-easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n        --chakra-transition-duration-ultra-fast: 50ms;\n        --chakra-transition-duration-faster: 100ms;\n        --chakra-transition-duration-fast: 150ms;\n        --chakra-transition-duration-normal: 200ms;\n        --chakra-transition-duration-slow: 300ms;\n        --chakra-transition-duration-slower: 400ms;\n        --chakra-transition-duration-ultra-slow: 500ms;\n        --chakra-blur-none: 0;\n        --chakra-blur-sm: 4px;\n        --chakra-blur-base: 8px;\n        --chakra-blur-md: 12px;\n        --chakra-blur-lg: 16px;\n        --chakra-blur-xl: 24px;\n        --chakra-blur-2xl: 40px;\n        --chakra-blur-3xl: 64px;\n      }\n    ',
          }}
        />
        <style
          data-emotion="css-global 1syi0wy"
          dangerouslySetInnerHTML={{
            __html:
              '\n      html {\n        line-height: 1.5;\n        -webkit-text-size-adjust: 100%;\n        font-family: system-ui, sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        touch-action: manipulation;\n      }\n\n      body {\n        position: relative;\n        min-height: 100%;\n        font-feature-settings: \'kern\';\n      }\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        box-sizing: border-box;\n      }\n\n      main {\n        display: block;\n      }\n\n      hr {\n        border-top-width: 1px;\n        box-sizing: content-box;\n        height: 0;\n        overflow: visible;\n      }\n\n      pre,\n      code,\n      kbd,\n      samp {\n        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;\n        font-size: 1em;\n      }\n\n      a {\n        background-color: transparent;\n        color: inherit;\n        -webkit-text-decoration: inherit;\n        text-decoration: inherit;\n      }\n\n      abbr[title] {\n        border-bottom: none;\n        -webkit-text-decoration: underline;\n        text-decoration: underline;\n        -webkit-text-decoration: underline dotted;\n        -webkit-text-decoration: underline dotted;\n        text-decoration: underline dotted;\n      }\n\n      b,\n      strong {\n        font-weight: bold;\n      }\n\n      small {\n        font-size: 80%;\n      }\n\n      sub,\n      sup {\n        font-size: 75%;\n        line-height: 0;\n        position: relative;\n        vertical-align: baseline;\n      }\n\n      sub {\n        bottom: -0.25em;\n      }\n\n      sup {\n        top: -0.5em;\n      }\n\n      img {\n        border-style: none;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        font-family: inherit;\n        font-size: 100%;\n        line-height: 1.15;\n        margin: 0;\n      }\n\n      button,\n      input {\n        overflow: visible;\n      }\n\n      button,\n      select {\n        text-transform: none;\n      }\n\n      button::-moz-focus-inner,\n      [type="button"]::-moz-focus-inner,\n      [type="reset"]::-moz-focus-inner,\n      [type="submit"]::-moz-focus-inner {\n        border-style: none;\n        padding: 0;\n      }\n\n      fieldset {\n        padding: 0.35em 0.75em 0.625em;\n      }\n\n      legend {\n        box-sizing: border-box;\n        color: inherit;\n        display: table;\n        max-width: 100%;\n        padding: 0;\n        white-space: normal;\n      }\n\n      progress {\n        vertical-align: baseline;\n      }\n\n      textarea {\n        overflow: auto;\n      }\n\n      [type="checkbox"],\n      [type="radio"] {\n        box-sizing: border-box;\n        padding: 0;\n      }\n\n      [type="number"]::-webkit-inner-spin-button,\n      [type="number"]::-webkit-outer-spin-button {\n        -webkit-appearance: none !important;\n      }\n\n      input[type="number"] {\n        -moz-appearance: textfield;\n      }\n\n      [type="search"] {\n        -webkit-appearance: textfield;\n        outline-offset: -2px;\n      }\n\n      [type="search"]::-webkit-search-decoration {\n        -webkit-appearance: none !important;\n      }\n\n      ::-webkit-file-upload-button {\n        -webkit-appearance: button;\n        font: inherit;\n      }\n\n      details {\n        display: block;\n      }\n\n      summary {\n        display: list-item;\n      }\n\n      template {\n        display: none;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      body,\n      blockquote,\n      dl,\n      dd,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6,\n      hr,\n      figure,\n      p,\n      pre {\n        margin: 0;\n      }\n\n      button {\n        background: transparent;\n        padding: 0;\n      }\n\n      fieldset {\n        margin: 0;\n        padding: 0;\n      }\n\n      ol,\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      textarea {\n        resize: vertical;\n      }\n\n      button,\n      [role="button"] {\n        cursor: pointer;\n      }\n\n      button::-moz-focus-inner {\n        border: 0 !important;\n      }\n\n      table {\n        border-collapse: collapse;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-size: inherit;\n        font-weight: inherit;\n      }\n\n      button,\n      input,\n      optgroup,\n      select,\n      textarea {\n        padding: 0;\n        line-height: inherit;\n        color: inherit;\n      }\n\n      img,\n      svg,\n      video,\n      canvas,\n      audio,\n      iframe,\n      embed,\n      object {\n        display: block;\n        vertical-align: middle;\n      }\n\n      img,\n      video {\n        max-width: 100%;\n        height: auto;\n      }\n\n      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {\n        outline: none;\n        box-shadow: none;\n      }\n\n      select::-ms-expand {\n        display: none;\n      }\n    ',
          }}
        />
        <style
          data-emotion="css-global 1baqkrf"
          dangerouslySetInnerHTML={{
            __html:
              "\n      body {\n        font-family: var(--chakra-fonts-body);\n        color: var(--chakra-colors-gray-800);\n        background: var(--chakra-colors-white);\n        transition-property: background-color;\n        transition-duration: var(--chakra-transition-duration-normal);\n        line-height: var(--chakra-lineHeights-base);\n      }\n\n      *,\n      *::before,\n      ::after {\n        border-color: var(--chakra-colors-gray-200);\n        word-wrap: break-word;\n      }\n\n      *::-webkit-input-placeholder {\n        color: var(--chakra-colors-gray-400);\n      }\n\n      *::-moz-placeholder {\n        color: var(--chakra-colors-gray-400);\n      }\n\n      *:-ms-input-placeholder {\n        color: var(--chakra-colors-gray-400);\n      }\n\n      *::placeholder {\n        color: var(--chakra-colors-gray-400);\n      }\n    ",
          }}
        />
        <div className="dark-scheme overflow-hidden" id="page">
          <nav>
            <div className="md:px-5 mx-auto relative">
              <div className="flex items-center justify-between lg:p-4 p-3">
                <a href="/">
                  <div className="flex items-center flex-no-shrink text-white mr-6">
                    <img
                      alt="polygod"
                      src="images/logo-white.svg"
                      className="py-4"
                      style={{ width: 50 }}wp-page
                    />
                  </div>
                </a>
                <div className="w-full  flex-grow flex items-center  ">
                  <div className="text-sm flex-grow pt-5 lg:pt-0" />
                  <div className="text-sm flex items-center">
                    <div className=" flex">
                      <a
                        className=" block false lg:inline-block lg:mt-0 text-teal-lighter hover:text-primary mr-6"
                        href="/Flash"
                        style={{
                            color: "white", // Text color
                          }}
                      >
                        Flash
                      </a>
                      <a
                        className=" block active lg:inline-block lg:mt-0 text-teal-lighter hover:text-primary mr-6"
                        href="/Stake"
                        style={{
                            color: "white", // Text color
                          }}
                      >
                        Stake
                      </a>
                    </div>
                    <a className="wallet mt-2 lg:mt-0 flex" href="#"    style={{
                            color: "white", // Text color
                          }}>
                      <span className="arrows" />
                      <span className="arrows" />
                      <span className="arrows" />
                      <span className="arrows" />
                      Connect{/* */} {/* */}...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
          <div className=" my-20 md:my-24" />
          <div className="">
            <div
              data-elementor-type="wp-page"
              data-elementor-id={2}
              className=" elementor-2"
              data-elementor-settings="[]"
            >
              <div className="elementor-section-wrap relative ">
                <div className="portfolio-item portfolio-item-fullscreen ">
                  <div className="xl:flex card-box">
                    <div className="xl:w-1/3 grid gid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-1 md:m-5">
                      <div className="relative">
                        <div className="card ">
                          <h2>0</h2>
                          <h3>STAKED</h3>
                          <p>$MOVEZ</p>
                          <div
                          // className="pic"
                          // style={{ backgroundImage: "url()" }}
                          />
                          <ul>
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                          </ul>
                          
                          <div className="social">
                            <div className="flex justify-end items-end flex-col">
                              <style
                                data-emotion="css cdlg3r"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n                            .css-cdlg3r {\n                              display: -webkit-inline-box;\n                              display: -webkit-inline-flex;\n                              display: -ms-inline-flexbox;\n                              display: inline-flex;\n                              -webkit-appearance: none;\n                              -moz-appearance: none;\n                              -ms-appearance: none;\n                              appearance: none;\n                              -webkit-align-items: center;\n                              -webkit-box-align: center;\n                              -ms-flex-align: center;\n                              align-items: center;\n                              -webkit-box-pack: center;\n                              -ms-flex-pack: center;\n                              -webkit-justify-content: center;\n                              justify-content: center;\n                              -webkit-user-select: none;\n                              -moz-user-select: none;\n                              -ms-user-select: none;\n                              user-select: none;\n                              position: relative;\n                              white-space: nowrap;\n                              vertical-align: middle;\n                              outline: 2px solid transparent;\n                              outline-offset: 2px;\n                              width: 50px;\n                              line-height: 1.2;\n                              border-radius: var(--chakra-radii-md);\n                              font-weight: var(--chakra-fontWeights-semibold);\n                              transition-property: var(--chakra-transition-property-common);\n                              transition-duration: var(--chakra-transition-duration-normal);\n                              height: 50px;\n                              min-width: var(--chakra-sizes-10);\n                              font-size: var(--chakra-fontSizes-md);\n                              -webkit-padding-start: var(--chakra-space-4);\n                              padding-inline-start: var(--chakra-space-4);\n                              -webkit-padding-end: var(--chakra-space-4);\n                              padding-inline-end: var(--chakra-space-4);\n                              color: inherit;\n                            }\n\n                            .css-cdlg3r:focus,\n                            .css-cdlg3r[data-focus] {\n                              box-shadow: var(--chakra-shadows-outline);\n                            }\n\n                            .css-cdlg3r[disabled],\n                            .css-cdlg3r[aria-disabled=true],\n                            .css-cdlg3r[data-disabled] {\n                              opacity: 0.4;\n                              cursor: not-allowed;\n                              box-shadow: var(--chakra-shadows-none);\n                            }\n\n                            .css-cdlg3r:hover,\n                            .css-cdlg3r[data-hover] {\n                              background: var(--chakra-colors-gray-100);\n                            }\n\n                            .css-cdlg3r:hover[disabled],\n                            .css-cdlg3r[data-hover][disabled],\n                            .css-cdlg3r:hover[aria-disabled=true],\n                            .css-cdlg3r[data-hover][aria-disabled=true],\n                            .css-cdlg3r:hover[data-disabled],\n                            .css-cdlg3r[data-hover][data-disabled] {\n                              background: initial;\n                            }\n\n                            .css-cdlg3r:active,\n                            .css-cdlg3r[data-active] {\n                              background: var(--chakra-colors-gray-200);\n                            }\n                          ",
                                }}
                              />
                              {/* <button
                                type="button"
                                className="chakra-button relative circle-btn mt-5  css-cdlg3r"
                              >
                                <span
                                  height="20px"
                                  width="20px"
                                  color="#fff"
                                  rotate={0}
                                  shake={0}
                                  beat={0}
                                  className="sc-beyTiQ fVHLZV"
                                >
                                  <svg
                                    className=""
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={32}
                                      d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
                                    ></path>
                                  </svg>
                                </span>
                                <text>Code</text>
                              </button> */}
                              
                            </div>
                          </div>
                        </div>
                        <div className="card-hook" />
                      </div>
                      
                      <div className="relative">
                        <div className="card ">
                          <h2>0</h2>
                          <h3>EARNED</h3>
                          <p>$MOVEZ</p>
                          <div
                          // className="pic"
                          // style={{
                          //   backgroundImage: "url(images/card-bg-1.svg)",
                          // }}
                          />
                          <ul>
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                          </ul>
                          <div className="social">
                            <div className="flex justify-end items-end flex-col">
                              <style
                                data-emotion="css cdlg3r"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n                            .css-cdlg3r {\n                              display: -webkit-inline-box;\n                              display: -webkit-inline-flex;\n                              display: -ms-inline-flexbox;\n                              display: inline-flex;\n                              -webkit-appearance: none;\n                              -moz-appearance: none;\n                              -ms-appearance: none;\n                              appearance: none;\n                              -webkit-align-items: center;\n                              -webkit-box-align: center;\n                              -ms-flex-align: center;\n                              align-items: center;\n                              -webkit-box-pack: center;\n                              -ms-flex-pack: center;\n                              -webkit-justify-content: center;\n                              justify-content: center;\n                              -webkit-user-select: none;\n                              -moz-user-select: none;\n                              -ms-user-select: none;\n                              user-select: none;\n                              position: relative;\n                              white-space: nowrap;\n                              vertical-align: middle;\n                              outline: 2px solid transparent;\n                              outline-offset: 2px;\n                              width: 50px;\n                              line-height: 1.2;\n                              border-radius: var(--chakra-radii-md);\n                              font-weight: var(--chakra-fontWeights-semibold);\n                              transition-property: var(--chakra-transition-property-common);\n                              transition-duration: var(--chakra-transition-duration-normal);\n                              height: 50px;\n                              min-width: var(--chakra-sizes-10);\n                              font-size: var(--chakra-fontSizes-md);\n                              -webkit-padding-start: var(--chakra-space-4);\n                              padding-inline-start: var(--chakra-space-4);\n                              -webkit-padding-end: var(--chakra-space-4);\n                              padding-inline-end: var(--chakra-space-4);\n                              color: inherit;\n                            }\n\n                            .css-cdlg3r:focus,\n                            .css-cdlg3r[data-focus] {\n                              box-shadow: var(--chakra-shadows-outline);\n                            }\n\n                            .css-cdlg3r[disabled],\n                            .css-cdlg3r[aria-disabled=true],\n                            .css-cdlg3r[data-disabled] {\n                              opacity: 0.4;\n                              cursor: not-allowed;\n                              box-shadow: var(--chakra-shadows-none);\n                            }\n\n                            .css-cdlg3r:hover,\n                            .css-cdlg3r[data-hover] {\n                              background: var(--chakra-colors-gray-100);\n                            }\n\n                            .css-cdlg3r:hover[disabled],\n                            .css-cdlg3r[data-hover][disabled],\n                            .css-cdlg3r:hover[aria-disabled=true],\n                            .css-cdlg3r[data-hover][aria-disabled=true],\n                            .css-cdlg3r:hover[data-disabled],\n                            .css-cdlg3r[data-hover][data-disabled] {\n                              background: initial;\n                            }\n\n                            .css-cdlg3r:active,\n                            .css-cdlg3r[data-active] {\n                              background: var(--chakra-colors-gray-200);\n                            }\n                          ",
                                }}
                              />
                              {/* <button
                                disabled=""
                                type="button"
                                className="chakra-button relative circle-btn mt-5  css-cdlg3r"
                              >
                                <span
                                  height="20px"
                                  width="20px"
                                  color="#fff"
                                  rotate={0}
                                  shake={0}
                                  beat={0}
                                  className="sc-beyTiQ fVHLZV"
                                >
                                  <svg
                                    className=""
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={32}
                                      d="M304 160l-64-64 64-64M207 352l64 64-64 64"
                                    />
                                    <circle
                                      cx={112}
                                      cy={96}
                                      r={48}
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={32}
                                    />
                                    <circle
                                      cx={400}
                                      cy={416}
                                      r={48}
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={32}
                                    />
                                    <path
                                      d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={32}
                                    />
                                  </svg>
                                </span>
                                <text>Stake</text>
                              </button> */}
                              <style
                                data-emotion="css cdlg3r"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n                            .css-cdlg3r {\n                              display: -webkit-inline-box;\n                              display: -webkit-inline-flex;\n                              display: -ms-inline-flexbox;\n                              display: inline-flex;\n                              -webkit-appearance: none;\n                              -moz-appearance: none;\n                              -ms-appearance: none;\n                              appearance: none;\n                              -webkit-align-items: center;\n                              -webkit-box-align: center;\n                              -ms-flex-align: center;\n                              align-items: center;\n                              -webkit-box-pack: center;\n                              -ms-flex-pack: center;\n                              -webkit-justify-content: center;\n                              justify-content: center;\n                              -webkit-user-select: none;\n                              -moz-user-select: none;\n                              -ms-user-select: none;\n                              user-select: none;\n                              position: relative;\n                              white-space: nowrap;\n                              vertical-align: middle;\n                              outline: 2px solid transparent;\n                              outline-offset: 2px;\n                              width: 50px;\n                              line-height: 1.2;\n                              border-radius: var(--chakra-radii-md);\n                              font-weight: var(--chakra-fontWeights-semibold);\n                              transition-property: var(--chakra-transition-property-common);\n                              transition-duration: var(--chakra-transition-duration-normal);\n                              height: 50px;\n                              min-width: var(--chakra-sizes-10);\n                              font-size: var(--chakra-fontSizes-md);\n                              -webkit-padding-start: var(--chakra-space-4);\n                              padding-inline-start: var(--chakra-space-4);\n                              -webkit-padding-end: var(--chakra-space-4);\n                              padding-inline-end: var(--chakra-space-4);\n                              color: inherit;\n                            }\n\n                            .css-cdlg3r:focus,\n                            .css-cdlg3r[data-focus] {\n                              box-shadow: var(--chakra-shadows-outline);\n                            }\n\n                            .css-cdlg3r[disabled],\n                            .css-cdlg3r[aria-disabled=true],\n                            .css-cdlg3r[data-disabled] {\n                              opacity: 0.4;\n                              cursor: not-allowed;\n                              box-shadow: var(--chakra-shadows-none);\n                            }\n\n                            .css-cdlg3r:hover,\n                            .css-cdlg3r[data-hover] {\n                              background: var(--chakra-colors-gray-100);\n                            }\n\n                            .css-cdlg3r:hover[disabled],\n                            .css-cdlg3r[data-hover][disabled],\n                            .css-cdlg3r:hover[aria-disabled=true],\n                            .css-cdlg3r[data-hover][aria-disabled=true],\n                            .css-cdlg3r:hover[data-disabled],\n                            .css-cdlg3r[data-hover][data-disabled] {\n                              background: initial;\n                            }\n\n                            .css-cdlg3r:active,\n                            .css-cdlg3r[data-active] {\n                              background: var(--chakra-colors-gray-200);\n                            }\n                          ",
                                }}
                              />
                              {/* <button
                                disabled=""
                                type="button"
                                className="chakra-button relative circle-btn mt-5  css-cdlg3r"
                              >
                                <span
                                  height="20px"
                                  width="20px"
                                  color="#fff"
                                  rotate={0}
                                  shake={0}
                                  beat={0}
                                  className="sc-beyTiQ fVHLZV"
                                >
                                  <svg
                                    className=""
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      d="M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40M384 176l80 80-80 80M191 256h273"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={32}
                                    />
                                  </svg>
                                </span>
                                <text>Claim</text>
                              </button> */}
                            </div>
                          </div>
                        </div>
                        <div className="card-hook" />
                      </div>
                      <div className="relative">
                        <div className="card ">
                          <h2>0</h2>
                          <h3>BALANCE</h3>
                          <p>$MOVEZ</p>
                          <div
                          // className="pic"
                          // style={{
                          //   backgroundImage: "url(images/card-bg-0.svg)",
                          // }}
                          />
                          <ul>
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                          </ul>
                          <div className="social">
                            <div className="flex justify-end items-end flex-col">
                              <a
                                href="https://medium.com/@Movez_official/guide-on-how-to-stake-movez-93ddf276591c"
                                target="_blank"
                              >
                                <style
                                  data-emotion="css cdlg3r"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n                              .css-cdlg3r {\n                                display: -webkit-inline-box;\n                                display: -webkit-inline-flex;\n                                display: -ms-inline-flexbox;\n                                display: inline-flex;\n                                -webkit-appearance: none;\n                                -moz-appearance: none;\n                                -ms-appearance: none;\n                                appearance: none;\n                                -webkit-align-items: center;\n                                -webkit-box-align: center;\n                                -ms-flex-align: center;\n                                align-items: center;\n                                -webkit-box-pack: center;\n                                -ms-flex-pack: center;\n                                -webkit-justify-content: center;\n                                justify-content: center;\n                                -webkit-user-select: none;\n                                -moz-user-select: none;\n                                -ms-user-select: none;\n                                user-select: none;\n                                position: relative;\n                                white-space: nowrap;\n                                vertical-align: middle;\n                                outline: 2px solid transparent;\n                                outline-offset: 2px;\n                                width: 50px;\n                                line-height: 1.2;\n                                border-radius: var(--chakra-radii-md);\n                                font-weight: var(--chakra-fontWeights-semibold);\n                                transition-property: var(--chakra-transition-property-common);\n                                transition-duration: var(--chakra-transition-duration-normal);\n                                height: 50px;\n                                min-width: var(--chakra-sizes-10);\n                                font-size: var(--chakra-fontSizes-md);\n                                -webkit-padding-start: var(--chakra-space-4);\n                                padding-inline-start: var(--chakra-space-4);\n                                -webkit-padding-end: var(--chakra-space-4);\n                                padding-inline-end: var(--chakra-space-4);\n                                color: inherit;\n                              }\n\n                              .css-cdlg3r:focus,\n                              .css-cdlg3r[data-focus] {\n                                box-shadow: var(--chakra-shadows-outline);\n                              }\n\n                              .css-cdlg3r[disabled],\n                              .css-cdlg3r[aria-disabled=true],\n                              .css-cdlg3r[data-disabled] {\n                                opacity: 0.4;\n                                cursor: not-allowed;\n                                box-shadow: var(--chakra-shadows-none);\n                              }\n\n                              .css-cdlg3r:hover,\n                              .css-cdlg3r[data-hover] {\n                                background: var(--chakra-colors-gray-100);\n                              }\n\n                              .css-cdlg3r:hover[disabled],\n                              .css-cdlg3r[data-hover][disabled],\n                              .css-cdlg3r:hover[aria-disabled=true],\n                              .css-cdlg3r[data-hover][aria-disabled=true],\n                              .css-cdlg3r:hover[data-disabled],\n                              .css-cdlg3r[data-hover][data-disabled] {\n                                background: initial;\n                              }\n\n                              .css-cdlg3r:active,\n                              .css-cdlg3r[data-active] {\n                                background: var(--chakra-colors-gray-200);\n                              }\n                            ",
                                  }}
                                />
                                {/* <button
                                  type="button"
                                  className="chakra-button relative circle-btn mt-5  css-cdlg3r"
                                >
                                  <span
                                    height="20px"
                                    width="20px"
                                    color="#fff"
                                    rotate={0}
                                    shake={0}
                                    beat={0}
                                    className="sc-beyTiQ fVHLZV"
                                  >
                                    <svg
                                      className=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                      />
                                      <path
                                        d="M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                      />
                                    </svg>
                                  </span>
                                  <text>News</text>
                                </button> */}
                              </a>
                              <a
                                href="https://www.movez.me/videos/staking"
                                target="_blank"
                              >
                                <style
                                  data-emotion="css cdlg3r"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n                              .css-cdlg3r {\n                                display: -webkit-inline-box;\n                                display: -webkit-inline-flex;\n                                display: -ms-inline-flexbox;\n                                display: inline-flex;\n                                -webkit-appearance: none;\n                                -moz-appearance: none;\n                                -ms-appearance: none;\n                                appearance: none;\n                                -webkit-align-items: center;\n                                -webkit-box-align: center;\n                                -ms-flex-align: center;\n                                align-items: center;\n                                -webkit-box-pack: center;\n                                -ms-flex-pack: center;\n                                -webkit-justify-content: center;\n                                justify-content: center;\n                                -webkit-user-select: none;\n                                -moz-user-select: none;\n                                -ms-user-select: none;\n                                user-select: none;\n                                position: relative;\n                                white-space: nowrap;\n                                vertical-align: middle;\n                                outline: 2px solid transparent;\n                                outline-offset: 2px;\n                                width: 50px;\n                                line-height: 1.2;\n                                border-radius: var(--chakra-radii-md);\n                                font-weight: var(--chakra-fontWeights-semibold);\n                                transition-property: var(--chakra-transition-property-common);\n                                transition-duration: var(--chakra-transition-duration-normal);\n                                height: 50px;\n                                min-width: var(--chakra-sizes-10);\n                                font-size: var(--chakra-fontSizes-md);\n                                -webkit-padding-start: var(--chakra-space-4);\n                                padding-inline-start: var(--chakra-space-4);\n                                -webkit-padding-end: var(--chakra-space-4);\n                                padding-inline-end: var(--chakra-space-4);\n                                color: inherit;\n                              }\n\n                              .css-cdlg3r:focus,\n                              .css-cdlg3r[data-focus] {\n                                box-shadow: var(--chakra-shadows-outline);\n                              }\n\n                              .css-cdlg3r[disabled],\n                              .css-cdlg3r[aria-disabled=true],\n                              .css-cdlg3r[data-disabled] {\n                                opacity: 0.4;\n                                cursor: not-allowed;\n                                box-shadow: var(--chakra-shadows-none);\n                              }\n\n                              .css-cdlg3r:hover,\n                              .css-cdlg3r[data-hover] {\n                                background: var(--chakra-colors-gray-100);\n                              }\n\n                              .css-cdlg3r:hover[disabled],\n                              .css-cdlg3r[data-hover][disabled],\n                              .css-cdlg3r:hover[aria-disabled=true],\n                              .css-cdlg3r[data-hover][aria-disabled=true],\n                              .css-cdlg3r:hover[data-disabled],\n                              .css-cdlg3r[data-hover][data-disabled] {\n                                background: initial;\n                              }\n\n                              .css-cdlg3r:active,\n                              .css-cdlg3r[data-active] {\n                                background: var(--chakra-colors-gray-200);\n                              }\n                            ",
                                  }}
                                />
                                {/* <button
                                  type="button"
                                  className="chakra-button relative circle-btn mt-5  css-cdlg3r"
                                >
                                  <span
                                    height="20px"
                                    width="20px"
                                    color="#fff"
                                    rotate={0}
                                    shake={0}
                                    beat={0}
                                    className="sc-beyTiQ fVHLZV"
                                  >
                                    <svg
                                      className=""
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                    >
                                      <path
                                        d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                      />
                                      <path
                                        d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                      />
                                    </svg>
                                  </span>
                                  <text>Video</text>
                                </button> */}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-hook" />
                      </div>
                      <div className="relative">
                        <div className="card ">
                          <h2>6 %</h2>
                          <h3>APR</h3>
                          <p>Reward Rate</p>
                          <div
                          // className="pic"
                          // style={{
                          //   backgroundImage: "url(images/card-bg-2.svg)",
                          // }}
                          />
                          <ul>
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                          </ul>
                          <div className="social">
                            <div className="flex justify-end items-end flex-col" />
                          </div>
                          <tab
                            type="none"
                            style={{ backgroundColor: "#FC4C02" }}
                          />
                        </div>
                        <div className="card-hook" />
                      </div>
                    </div>
                    <div className="xl:w-2/3 md:m-10 m-2">
                      <div className=" justify-center nav-btn flex">
                        <a
                          className=" block active lg:inline-block lg:mt-0 text-teal-lighter hover:text-primary mr-6"
                          href="/flexible"
                        >
                          Stake
                        </a>
                        <a
                          className=" block false lg:inline-block lg:mt-0 text-teal-lighter hover:text-primary mr-6"
                          href="/flexible/unstake"
                        >
                          UnStake
                        </a>
                      </div>
                      <style
                        data-emotion="css a3jfl2"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                    .css-a3jfl2 {\n                      -webkit-box-pack: justify;\n                      -webkit-justify-content: space-between;\n                      justify-content: space-between;\n                      -webkit-flex-direction: column;\n                      -ms-flex-direction: column;\n                      flex-direction: column;\n                      font-family: var(--chakra-fonts-heading);\n                      text-align: center;\n                      width: 100%;\n                      display: -webkit-box;\n                      display: -webkit-flex;\n                      display: -ms-flexbox;\n                      display: flex;\n                      -webkit-flex: 1;\n                      -ms-flex: 1;\n                      flex: 1;\n                    }\n                  ",
                        }}
                      />
                      <div className="chakra-steps css-a3jfl2">
                        <style
                          data-emotion="css lncvd7"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                      .css-lncvd7 {\n                        opacity: 1;\n                        -webkit-flex-direction: column;\n                        -ms-flex-direction: column;\n                        flex-direction: column;\n                        -webkit-align-items: flex-start;\n                        -webkit-box-align: flex-start;\n                        -ms-flex-align: flex-start;\n                        align-items: flex-start;\n                        -webkit-flex: 1 0 auto;\n                        -ms-flex: 1 0 auto;\n                        flex: 1 0 auto;\n                        -webkit-box-pack: start;\n                        -ms-flex-pack: start;\n                        -webkit-justify-content: flex-start;\n                        justify-content: flex-start;\n                        display: -webkit-box;\n                        display: -webkit-flex;\n                        display: -ms-flexbox;\n                        display: flex;\n                        position: relative;\n                        width: 100%;\n                      }\n\n                      .css-lncvd7:hover,\n                      .css-lncvd7[data-hover] {\n                        cursor: default;\n                      }\n                    ",
                          }}
                        />
                        <div aria-disabled="false" className="css-lncvd7 abc3">
                          <style
                            data-emotion="css u4p24i"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                        .css-u4p24i {\n                          display: -webkit-box;\n                          display: -webkit-flex;\n                          display: -ms-flexbox;\n                          display: flex;\n                          -webkit-flex-direction: row;\n                          -ms-flex-direction: row;\n                          flex-direction: row;\n                          -webkit-align-items: center;\n                          -webkit-box-align: center;\n                          -ms-flex-align: center;\n                          align-items: center;\n                        }\n                      ",
                            }}
                          />
                          <div className="css-u4p24i ">
                            <style
                              data-emotion="css fr2159"
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n                          .css-fr2159 {\n                            display: -webkit-box;\n                            display: -webkit-flex;\n                            display: -ms-flexbox;\n                            display: flex;\n                            border-radius: 50%;\n                            -webkit-align-items: center;\n                            -webkit-box-align: center;\n                            -ms-flex-align: center;\n                            align-items: center;\n                            -webkit-box-pack: center;\n                            -ms-flex-pack: center;\n                            -webkit-justify-content: center;\n                            justify-content: center;\n                            background: var(--chakra-colors-gray-200);\n                            border-color: var(--chakra-colors-gray-200);\n                            transition-property: background, border-color;\n                            transition-duration: var(--chakra-transition-duration-normal);\n                            width: 40px;\n                            height: 40px;\n                            border-width: 2px;\n                          }\n\n                          .css-fr2159[aria-current=step] {\n                            background: #e0e7ef;\n                            border-color: var(--chakra-colors-red-500);\n                          }\n\n                          .css-fr2159[aria-current=step][aria-invalid=true],\n                          .css-fr2159[aria-current=step][data-invalid] {\n                            background: var(--chakra-colors-red-500);\n                            border-color: var(--chakra-colors-red-500);\n                          }\n\n                          .css-fr2159[data-highlighted] {\n                            background: var(--chakra-colors-red-500);\n                            border-color: var(--chakra-colors-red-500);\n                          }\n\n                          .css-fr2159[data-clickable]:hover {\n                            border-color: var(--chakra-colors-red-500);\n                          }\n                        ",
                              }}
                            />
                            <div
                              className="css-fr2159 "
                              style={{
                                backgroundColor: "#2A303E",
                                border: "2px solid red", // Remove border
                                // Dark orange color
                              }}
                            >
                              <span
                                style={{
                                  color: "white", // Text color
                                }}
                                className="css-eb100c"
                              >
                                1
                              </span>
                            </div>
                            <style
                              data-emotion="css 17mvcka"
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n                          .css-17mvcka {\n                            display: -webkit-box;\n                            display: -webkit-flex;\n                            display: -ms-flexbox;\n                            display: flex;\n                            -webkit-flex-direction: column;\n                            -ms-flex-direction: column;\n                            flex-direction: column;\n                            -webkit-box-pack: center;\n                            -ms-flex-pack: center;\n                            -webkit-justify-content: center;\n                            justify-content: center;\n                            -webkit-align-items: flex-start;\n                            -webkit-box-align: flex-start;\n                            -ms-flex-align: flex-start;\n                            align-items: flex-start;\n                          }\n                        ",
                              }}
                            />
                            <div aria-current="true" className="css-17mvcka ">
                              <style
                                data-emotion="css 1a5zsog"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n                            .css-1a5zsog {\n                              -webkit-margin-start: var(--chakra-space-2);\n                              margin-inline-start: var(--chakra-space-2);\n                              -webkit-margin-end: var(--chakra-space-2);\n                              margin-inline-end: var(--chakra-space-2);\n                              opacity: 1;\n                              font-weight: var(--chakra-fontWeights-medium);\n                              color: var(--chakra-colors-gray-900);\n                              text-align: center;\n                              font-size: var(--chakra-fontSizes-md);\n                            }\n                          ",
                                }}
                              />
                              <span
                                className="css-1a5zsog "
                                style={{
                                  color: "white", // Text color
                                }}
                              >
                                Checkpoints
                              </span>
                            </div>
                          </div>
                          <style
                            data-emotion="css xdfuw9"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                        .css-xdfuw9 {\n                          -webkit-margin-start: calc(40px / 2);\n                          margin-inline-start: calc(40px / 2);\n                          margin-top: var(--chakra-space-2);\n                          margin-bottom: var(--chakra-space-2);\n                          -webkit-padding-start: var(--chakra-space-4);\n                          padding-inline-start: var(--chakra-space-4);\n                          -webkit-margin-end: 0px;\n                          margin-inline-end: 0px;\n                          height: auto;\n                          -webkit-align-self: stretch;\n                          -ms-flex-item-align: stretch;\n                          -ms-grid-row-align: stretch;\n                          align-self: stretch;\n                          border-top-width: 0;\n                          border-inline-start-width: 2px;\n                          min-height: 1.5rem;\n                          border-color: var(--chakra-colors-gray-200);\n                          -webkit-flex: 1;\n                          -ms-flex: 1;\n                          flex: 1;\n                          display: -webkit-box;\n                          display: -webkit-flex;\n                          display: -ms-flexbox;\n                          display: flex;\n                          transition-property: border-color;\n                          transition-duration: var(--chakra-transition-duration-normal);\n                        }\n\n                        .css-xdfuw9[data-highlighted] {\n                          border-color: var(--chakra-colors-red-500);\n                        }\n                      ",
                            }}
                          />
                          <div className="css-xdfuw9">
                            <div
                              className="chakra-collapse"
                              style={{
                                overflow: "initial",
                                display: "block",
                                width: "100%",
                                opacity: 1,
                                height: "auto",
                                borderColor: 'red', // Border color using CSS variable

                              }}
                            >
                              <div className="css-1peulnz custom-button" bis_skin_checked={1}
                                   style={{
                                  
                                    borderColor: 'red', // Border color using CSS variable

                                  }}
                            >
                                <div
                                  className="chakra-collapse"
                                  bis_skin_checked={1}
                                  style={{
                                    overflow: "initial",
                                    display: "block",
                                    width: "100%",
                                    opacity: 1,
                                    height: "auto",
                                    borderColor: 'red', // Border color using CSS variable

                                  }}
                            
                                >
                                  <div
                                    className="relative items-center elementor-element elementor-element-3d36dae null dark_mode_light_widget md:m-5 my-4"
                                    bis_skin_checked={1}
                                  >
                                    <div
                                      className="elementor-widget-container null"
                                      bis_skin_checked={1}
                                    >
                                      <div
                                        className="pricing text-left "
                                        bis_skin_checked={1}
                                      >
                                        <div
                                          className="pricing_list grid md:grid-cols-2 gap-10"
                                          bis_skin_checked={1}
                                        >
                                          <div
                                            className="pricing_list_item  flex items-center false"
                                            bis_skin_checked={1}
                                          >
                                            <img
                                              src="mark.svg"
                                              alt="Checkmark"
                                              style={{
                                                width: "35px", // Adjust the width
                                                height: "35px", // Adjust the height
                                                position: "relative", // Allows you to position the element absolutely within its container
                                                top: "0px", // Center vertically within the container
                                                left: "-10", // Center horizontally within the container
                                                filter:
                                                  "invert(35%) sepia(90%) saturate(700%) hue-rotate(-10deg) brightness(115%) contrast(105%)",
                                              }}
                                            />{" "}
                                            <div
                                              className="pl-5"
                                              bis_skin_checked={1}
                                            >
                                              <span className="title">
                                                Connected <br /> MetaMask
                                              </span>
                                              <p className="">
                                                If not connected, click the{" "}
                                                <b>"Connect"</b> button in the
                                                top right corner
                                              </p>
                                            </div>
                                          </div>
                                          <div
                                            className="pricing_list_item  flex items-center disabled"
                                            bis_skin_checked={1}
                                          >
                                            <img
                                              src="mark.svg"
                                              alt="Checkmark"
                                              style={{
                                                width: "35px", // Adjust the width
                                                height: "35px", // Adjust the height
                                                position: "relative", // Allows you to position the element absolutely within its container
                                                top: "0px", // Center vertically within the container
                                                left: "-10", // Center horizontally within the container
                                                filter:
                                                  "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                                              }}
                                            />{" "}
                                            <div
                                              className="pl-5"
                                              bis_skin_checked={1}
                                            >
                                              <span className="title">
                                                $MOVEZ <br />
                                                available
                                              </span>
                                              <p className="" />
                                              <div
                                                className="flex items-center"
                                                bis_skin_checked={1}
                                              >
                                                <img
                                                  src="/movez-logo.svg"
                                                  className="h-5 mr-2"
                                                />
                                                <h6> Balance: 0</h6>{" "}
                                              </div>
                                              <p />
                                            </div>
                                          </div>
                                          <div
                                            className="pricing_list_item  flex items-center disabled"
                                            bis_skin_checked={1}
                                          >
                                            <img
                                              src="mark.svg"
                                              alt="Checkmark"
                                              style={{
                                                width: "35px", // Adjust the width
                                                height: "35px", // Adjust the height
                                                position: "relative", // Allows you to position the element absolutely within its container
                                                top: "0px", // Center vertically within the container
                                                left: "-10", // Center horizontally within the container
                                                filter:
                                                  "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                                              }}
                                            />{" "}
                                            <div
                                              className="pl-5"
                                              bis_skin_checked={1}
                                            >
                                              <span className="title">
                                                BNB available
                                              </span>
                                              <p className="">
                                                BNB is required to pay
                                                transaction fees on the Binance
                                                Smart Chain network.
                                                <br />{" "}
                                              </p>
                                              <div
                                                className="flex items-center"
                                                bis_skin_checked={1}
                                              >
                                                <img
                                                  src="/bnb-logo.svg"
                                                  className="h-5 mr-2"
                                                />
                                                <h6>Balance</h6> : 0
                                              </div>
                                              <p />
                                            </div>
                                          </div>
                                          <div
                                            className="pricing_list_item  flex items-center disabled"
                                            bis_skin_checked={1}
                                          >
                                            <img
                                              src="mark.svg"
                                              alt="Checkmark"
                                              style={{
                                                width: "35px", // Adjust the width
                                                height: "35px", // Adjust the height
                                                position: "relative", // Allows you to position the element absolutely within its container
                                                top: "0px", // Center vertically within the container
                                                left: "-10", // Center horizontally within the container
                                                filter:
                                                  "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                                              }}
                                            />{" "}
                                            <div
                                              className="pl-5"
                                              bis_skin_checked={1}
                                            >
                                              <span className="title">
                                                Eligible to stake
                                              </span>
                                              <p className="">
                                                You cannot stake if you have an
                                                active $MOVEZ unstake/withdrawal
                                                request
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="flex justify-between md:justify-center items-end md:flex-col"
                                        bis_skin_checked={1}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-center">
                                <style
                                  data-emotion="css wu96lf"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n                              .css-wu96lf {\n                                display: -webkit-inline-box;\n                                display: -webkit-inline-flex;\n                                display: -ms-inline-flexbox;\n                                display: inline-flex;\n                                -webkit-appearance: none;\n                                -moz-appearance: none;\n                                -ms-appearance: none;\n                                appearance: none;\n                                -webkit-align-items: center;\n                                -webkit-box-align: center;\n                                -ms-flex-align: center;\n                                align-items: center;\n                                -webkit-box-pack: center;\n                                -ms-flex-pack: center;\n                                -webkit-justify-content: center;\n                                justify-content: center;\n                                -webkit-user-select: none;\n                                -moz-user-select: none;\n                                -ms-user-select: none;\n                                user-select: none;\n                                position: relative;\n                                white-space: nowrap;\n                                vertical-align: middle;\n                                outline: 2px solid transparent;\n                                outline-offset: 2px;\n                                width: auto;\n                                line-height: 1.2;\n                                border-radius: var(--chakra-radii-md);\n                                font-weight: var(--chakra-fontWeights-semibold);\n                                transition-property: var(--chakra-transition-property-common);\n                                transition-duration: var(--chakra-transition-duration-normal);\n                                height: var(--chakra-sizes-12);\n                                min-width: var(--chakra-sizes-12);\n                                font-size: var(--chakra-fontSizes-lg);\n                                -webkit-padding-start: var(--chakra-space-6);\n                                padding-inline-start: var(--chakra-space-6);\n                                -webkit-padding-end: var(--chakra-space-6);\n                                padding-inline-end: var(--chakra-space-6);\n                                background: var(--chakra-colors-gray-100);\n                                -webkit-margin-start: var(--chakra-space-2);\n                                margin-inline-start: var(--chakra-space-2);\n                                -webkit-margin-end: var(--chakra-space-2);\n                                margin-inline-end: var(--chakra-space-2);\n                              }\n\n                              .css-wu96lf:focus,\n                              .css-wu96lf[data-focus] {\n                                box-shadow: var(--chakra-shadows-outline);\n                              }\n\n                              .css-wu96lf[disabled],\n                              .css-wu96lf[aria-disabled=true],\n                              .css-wu96lf[data-disabled] {\n                                opacity: 0.4;\n                                cursor: not-allowed;\n                                box-shadow: var(--chakra-shadows-none);\n                              }\n\n                              .css-wu96lf:hover,\n                              .css-wu96lf[data-hover] {\n                                background: var(--chakra-colors-gray-200);\n                              }\n\n                              .css-wu96lf:hover[disabled],\n                              .css-wu96lf[data-hover][disabled],\n                              .css-wu96lf:hover[aria-disabled=true],\n                              .css-wu96lf[data-hover][aria-disabled=true],\n                              .css-wu96lf:hover[data-disabled],\n                              .css-wu96lf[data-hover][data-disabled] {\n                                background: var(--chakra-colors-gray-100);\n                              }\n\n                              .css-wu96lf:active,\n                              .css-wu96lf[data-active] {\n                                background: var(--chakra-colors-gray-300);\n                              }\n                            ",
                                  }}
                                />
                                <button
                                  disabled=""
                                  type="button"
                                  className="chakra-button css-wu96lf"
                                  style={{
                                    backgroundColor: "#201C1B", // Dark orange color
                                    color: "gray", // Text color
                                  }}
                                >
                                  <i
                                    className="ion-right ion"
                                    style={{ transform: "scaleX(-1)" }}
                                  >
                                    <svg
                                      className="arrow-icon"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                                        strokeWidth={2}
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </i>
                                  <span className="ml-3">Previous</span>
                                </button>
                                <button
                                  disabled=""
                                  type="button"
                                  className="chakra-button css-wu96lf"
                                  style={{
                                    backgroundColor: "#201C1B", // Dark orange color
                                    color: "gray", // Text color
                                  }}
                                >
                                  <span className="mr-3">Next</span>
                                  <i className="ion-right ion">
                                    <svg
                                      className="arrow-icon"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                                        strokeWidth={2}
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <style
                          data-emotion="css ee8ft3"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                      .css-ee8ft3 abc3 {\n                        opacity: 0.8;\n                        -webkit-flex-direction: column;\n                        -ms-flex-direction: column;\n                        flex-direction: column;\n                        -webkit-align-items: flex-start;\n                        -webkit-box-align: flex-start;\n                        -ms-flex-align: flex-start;\n                        align-items: flex-start;\n                        -webkit-flex: 1 0 auto;\n                        -ms-flex: 1 0 auto;\n                        flex: 1 0 auto;\n                        -webkit-box-pack: start;\n                        -ms-flex-pack: start;\n                        -webkit-justify-content: flex-start;\n                        justify-content: flex-start;\n                        display: -webkit-box;\n                        display: -webkit-flex;\n                        display: -ms-flexbox;\n                        display: flex;\n                        position: relative;\n                        width: 100%;\n                      }\n\n                      .css-ee8ft3 abc3:hover,\n                      .css-ee8ft3 abc3[data-hover] {\n                        cursor: default;\n                      }\n                    ",
                          }}
                        />
                        <div
                          aria-disabled="true"
                          className="css-ee8ft3 abc3 "
                          style={{
                            backgroundColor: "#201C1B", // Dark orange color
                            color: "gray", // Text color
                          }}
                        >
                          <div className="css-u4p24i">
                            <div
                              className="css-fr2159 "
                              style={{
                                backgroundColor: "#2A303E",
                                border: "none", // Remove border
                                // Dark orange color
                              }}
                            >
                              <span
                                style={{
                                  color: "white", // Text color
                                }}
                                className="css-eb100c"
                              >
                                2
                              </span>
                            </div>
                            <div aria-current="false" className="css-17mvcka ">
                              <style
                                data-emotion="css 107sa8s"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\n                            .css-107sa8s  {\n                              -webkit-margin-start: var(--chakra-space-2);\n                              margin-inline-start: var(--chakra-space-2);\n                              -webkit-margin-end: var(--chakra-space-2);\n                              margin-inline-end: var(--chakra-space-2);\n                              opacity: 0.8;\n                              font-weight: var(--chakra-fontWeights-medium);\n                              color: var(--chakra-colors-gray-900);\n                              text-align: center;\n                              font-size: var(--chakra-fontSizes-md);\n                            }\n                          ",
                                }}
                              />
                              <span
                                className="css-107sa8s "
                                style={{
                                  color: "whitesmoke", // Text color
                                }}
                              >
                                Amount Stake
                              </span>
                            </div>
                          </div>
                          <div className="css-xdfuw9">
                            <div
                              className="chakra-collapse"
                              style={{
                                overflow: "hidden",
                                display: "none",
                                width: "100%",
                                opacity: 0,
                                height: 0,
                              }}
                            />
                          </div>
                        </div>
                        <div aria-disabled="true" className="css-ee8ft3 abc3">
                          <div className="css-u4p24i">
                            <div
                              className="css-fr2159 "
                              style={{
                                backgroundColor: "#2A303E",
                                border: "none", // Remove border
                                // Dark orange color
                              }}
                            >
                              <span
                                style={{
                                  color: "white", // Text color
                                }}
                                className="css-eb100c"
                              >
                                3
                              </span>
                            </div>
                            <div aria-current="false" className="css-17mvcka">
                              <span
                                className="css-107sa8s "
                                style={{
                                  color: "whitesmoke", // Text color
                                }}
                              >
                                Pre-authorization
                              </span>
                            </div>
                          </div>
                          <div className="css-xdfuw9">
                            <div
                              className="chakra-collapse"
                              style={{
                                overflow: "hidden",
                                display: "none",
                                width: "100%",
                                opacity: 0,
                                height: 0,
                              }}
                            />
                          </div>
                        </div>
                        <div aria-disabled="true" className="css-ee8ft3 abc3">
                          <div className="css-u4p24i">
                            <div
                              className="css-fr2159 "
                              style={{
                                backgroundColor: "#2A303E",
                                border: "none", // Remove border
                                // Dark orange color
                              }}
                            >
                              <span
                                style={{
                                  color: "white", // Text color
                                }}
                                className="css-eb100c"
                              >
                                4
                              </span>
                            </div>
                            <div aria-current="false" className="css-17mvcka">
                              <span
                                className="css-107sa8s "
                                style={{
                                  color: "whitesmoke", // Text color
                                }}
                              >
                                Confirm
                              </span>
                            </div>
                          </div>
                          <div className="css-xdfuw9">
                            <div
                              className="chakra-collapse"
                              style={{
                                overflow: "hidden",
                                display: "none",
                                width: "100%",
                                opacity: 0,
                                height: 0,
                              }}
                            />
                          </div>
                        </div>
                        <div aria-disabled="true" className="css-ee8ft3 abc3">
                          <div className="css-u4p24i">
                            <div
                              className="css-fr2159 "
                              style={{
                                backgroundColor: "#2A303E",
                                border: "none", // Remove border
                                // Dark orange color
                              }}
                            >
                              <span
                                style={{
                                  color: "white", // Text color
                                }}
                                className="css-eb100c"
                              >
                                5
                              </span>
                            </div>
                            <div aria-current="false" className="css-17mvcka">
                              <span
                                className="css-107sa8s "
                                style={{
                                  color: "whitesmoke", // Text color
                                }}
                              >
                                Confirmation
                              </span>
                            </div>
                          </div>
                          <style
                            data-emotion="css 1xi24vq"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                        .css-1xi24vq {\n                          -webkit-margin-start: calc(40px / 2);\n                          margin-inline-start: calc(40px / 2);\n                          margin-top: var(--chakra-space-2);\n                          margin-bottom: var(--chakra-space-2);\n                          -webkit-padding-start: var(--chakra-space-4);\n                          padding-inline-start: var(--chakra-space-4);\n                          -webkit-margin-end: 0px;\n                          margin-inline-end: 0px;\n                          height: auto;\n                          -webkit-align-self: stretch;\n                          -ms-flex-item-align: stretch;\n                          -ms-grid-row-align: stretch;\n                          align-self: stretch;\n                          border-top-width: 0;\n                          border-inline-start-width: 0;\n                          min-height: auto;\n                          border-color: var(--chakra-colors-gray-200);\n                          -webkit-flex: 1;\n                          -ms-flex: 1;\n                          flex: 1;\n                          display: -webkit-box;\n                          display: -webkit-flex;\n                          display: -ms-flexbox;\n                          display: flex;\n                          transition-property: border-color;\n                          transition-duration: var(--chakra-transition-duration-normal);\n                        }\n\n                        .css-1xi24vq[data-highlighted] {\n                          border-color: var(--chakra-colors-red-500);\n                        }\n                      ",
                            }}
                          />
                          <div className="css-1xi24vq">
                            <div
                              className="chakra-collapse"
                              style={{
                                overflow: "hidden",
                                display: "none",
                                width: "100%",
                                opacity: 0,
                                height: 0,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <span />
        <w3m-modal />
      </div>
    </>
  );
}

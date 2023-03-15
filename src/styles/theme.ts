import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    purple: {
      100: "#EBE2F7",
      200: "#D1BDEE",
      300: "#BA9CE5",
      400: "#9E74DA",
      500: "#8048CF",
      600: "#6818B5",
      700: "#56087F",
      800: "#33054D",
    },
    gray: {
      50: "#f6f6f7",
      100: "#eeeeee",
      200: "#d4d4d4",
      300: "#9e9ea7",
      400: "#666665",
      900: "#111111",
    },
  },
  fonts: {
    heading: "Harmattan",
    body: "Harmattan",
  },
  fontsSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  styles: {
    global: {
      // "*": {
      //   margin: 0,
      //   padding: 0,
      // },
      body: {
        bg: "white",
        color: "gray.900",
      },

      "::-webkit-scrollbar": {
        width: "6px",
        background: `rgba(0,0,0,.5)`,
      },
      "::-webkit-scrollbar-track": {
        width: "6px",
      },
      "::-webkit-scrollbar-thumb": {
        background: `rgba(0,0,0,.5)`,
      },
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

export default theme;

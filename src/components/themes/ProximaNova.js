import ProximaNova from "../fonts/ProximaNova-Regular.woff";
import ProximaNovaSemibold from "../fonts/ProximaNova-Semibold.woff";

import { createMuiTheme } from "@material-ui/core/styles/index";

const proximaNova = {
  fontFamily: "ProximaNova",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
        local('ProximaNova'),
        local('ProximaNova-Regular'),
        url(${ProximaNova}) format('woff')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const proximaNovaSemibold = {
  fontFamily: "ProximaNovaSemibold",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
        local('ProximaNova'),
        local('ProximaNova-ProximaNova-Semibold'),
        url(${ProximaNovaSemibold}) format('woff')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const proximaNovaTheme = createMuiTheme({
  palette: {
    pu: {
      accent: "#FF9B0F",
      bg: "#ebf7f8",
      borderColor: "#ecf3f3",
      error: "#f44336",
      blue: "#f5fbfb",
      red: '#d01818'
    },
  },
  typography: {
    fontFamily: "ProximaNova, Arial",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body, #root, .App": {
          height: "100%",
        },
        '.App': {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          height: 'auto'
        },
        "@font-face": [proximaNova, proximaNovaSemibold],
        ".App-logo": {
          marginTop: "40px",
          marginBottom: "40px",
          height: "20px",
        },
        ".App-header": {
          backgroundColor: "white",
          minHeight: "5vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "calc(10px + 0.5vmin)",
          color: "black",
          position: "fixed",
          zIndex: "30",
        },
      },
    },
  },
  someRandom: {
    color: "#000",
  },
});

export default proximaNovaTheme;

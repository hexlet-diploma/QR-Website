import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#72baee",
    },
    secondary: {
      main: "#ba93fe",
    },
    headline: {
      main: "#0082de",
    },
    block: {
      main: "#f1f1f1",
    },
    footer: {
      main: "#191a23",
    },
    emailBlock: {
      main: "#292a32",
    },
  },
  typography: {
    fontFamily: `"Fira Sans", "Arial", sans-serif`,
    h1: {
      fontSize: "60px",
      fontWeight: "500",
      fontFamily: "Inria Sans",
    },
    h2: {
      fontSize: "40px",
      fontWeight: "500",
      fontFamily: "Inria Sans",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 400,
      fontFamily: "Arial",
    },
    h4: {
      fontSize: "20px",
      fontWeight: "400",
      fontFamily: "Arial",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 500,
      fontFamily: "Inria Sans",
    },
    h6: {
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: "Arial",
    },
    subtitle1: {
      fontSize: "48px",
      fontWeight: 500,
      fontFamily: "Inria Sans",
    },
    subtitle2: {
      fontSize: "32px",
      fontWeight: 500,
      fontFamily: "Inria Sans",
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          // boerderRadius: "100px",
          padding: "22px 22px",
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "0px",
          maxWidth: "100%",
        }
      }
    }
  }
});

export default theme;
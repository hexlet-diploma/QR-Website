import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Stack } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";
import Intro from "./components/Intro";
import OpenSourceSection from "./components/OpenSourceSection";
import About from "./components/About";
import Features from "./components/Features";
import Team from "./components/Team";
import Footer from "./components/Footer";

import { useMediaQuery } from "@mui/material";

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Центрированный основной контент */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundColor: theme.palette.background.default,
          paddingTop: isMobile ? "20px" : "50px",
        }}
      >
        <Stack sx={{ maxWidth: "1200px", width: "100%", margin: "0 auto", flexGrow: 1 }} pb="173px" spacing="30px">
          <Header />
          <Intro />
          <OpenSourceSection />
          <About />
          <Features />
          <Team />
        </Stack>

        {/* Footer вынесен из ограниченного контейнера — растягивается на 100% */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;

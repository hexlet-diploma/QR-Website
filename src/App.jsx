import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container, Stack } from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";
import Intro from "./components/Intro";
import OpenSourceSection from "./components/OpenSourceSection";
import About from "./components/About";
import Features from "./components/Features";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Stack gap="90px">
            <Header />
            <Intro />
            <OpenSourceSection />
            <About />
            <Features />
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

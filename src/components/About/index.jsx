import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AboutPicture from "../../assets/AboutPicture.png";

const About = () => {
  const theme = useTheme();

  return (
    <Stack spacing={4} alignItems="center">
      <Box>
        <Typography
          variant="subtitle1"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "#000",
            display: "inline-block",
            px: "10px",
            py: "5px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          About
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        sx={{
          backgroundColor: theme.palette.block.main,
          p: { xs: 3, md: 6 },
          borderRadius: "20px",
          mt: 4,
        }}
        spacing={{ xs: 4, md: 6 }}
      >
        <Box
          component="img"
          src={AboutPicture}
          alt="About"
          sx={{
            width: { xs: "100%", md: "50%" },
            maxHeight: 300,
            objectFit: "contain",
          }}
        />
        <Stack spacing={2} sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography variant="h1" fontSize={{ xs: "32px", md: "60px" }} textAlign={{ xs: "center", md: "left" }}>
            We update our extension on a regular basis.
          </Typography>
          <Typography variant="h4" textAlign={{ xs: "center", md: "left" }}>
            We are constantly adding new features to our extension, updating old ones, fixing bugs and more. We also think about how to make life easier for our users. That's why we add the most requested features in a timely manner.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;

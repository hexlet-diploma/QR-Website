import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AboutPicture from "../../assets/AboutPicture.png";

const About = () => {
  const theme = useTheme();

  return (
    <Stack alignItems="flex-start" sx={{ mx: { xs: 2, md: 0 } }}>
      {/* Заголовок "About" — только для десктопа */}
      <Typography
        variant="subtitle1"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "#000",
          display: { xs: "none", md: "inline-block" },
          px: 2,
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        About
      </Typography>

      {/* Основной контент */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={{ xs: 0, md: 6 }}
        sx={{
          backgroundColor: theme.palette.block.main,
          p: { xs: 3, md: 6 },
          borderRadius: "20px",
          mt: 4,
        }}
      >
        {/* Картинка — только для десктопа */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "50%",
          }}
        >
          <Box
            component="img"
            src={AboutPicture}
            alt="About"
            sx={{
              width: "100%",
              maxHeight: 300,
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Текстовая часть */}
        <Stack spacing={2} sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography
            variant="h1"
            fontSize={{ xs: "32px", md: "60px" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            We update our extension on a regular basis.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            We are constantly adding new features to our extension, updating old
            ones, fixing bugs and more. We also think about how to make life
            easier for our users. That's why we add the most requested features
            in a timely manner.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;

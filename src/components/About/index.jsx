import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AboutPicture from "../../assets/AboutPicture.png";

const About = () => {
  const theme = useTheme();
  return (
    <Stack>
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
          }}
        >
          About
        </Typography>
      </Box>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ backgroundColor: theme.palette.block.main, padding: "50px", borderRadius: "20px", marginTop: "50px" }} gap="50px">
        <Box
          component="img"
          src={AboutPicture}
          alt="About"
          sx={{ maxWidth: "50%", height: "auto", objectFit: "contain" }}
        />
        <Stack gap="20px" sx={{ maxWidth: "50%" }}>
          <Typography variant="h1">We update our extension on a regular basis.</Typography>
          <Typography variant="h4">We are constantly adding new features to our extension, updating old ones, fixing bugs and more. We also think about how to make life easier for our users. That's why we add the most requested features in a timely manner.</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;

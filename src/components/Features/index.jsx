import React from "react";
import { Typography, Box, Stack, useTheme, Grid } from "@mui/material";
import FeatureBlock from "../FeatureBlock";

const Features = () => {
  const theme = useTheme();
  const features = [
    {
      type: "generate",
      description:
        "Generate QR Codes from URLs on the fly! Our extension automatically creates a QR code of the currently open page so you can share it in one click.",
      isAndMore: false,
    },
    {
      type: "link",
      description:
        "Generate QR Codes from any link you want! Just paste the link into the extension and it will create a QR code for you.",
      isAndMore: false,
    },
    {
      type: "copy",
      description:
        "Copy the generated QR Code to your clipboard with one click! No need to download it first.",
      isAndMore: false,
    },
    {
      type: "download",
      description:
        "Download the generated QR Code in PNG format with one click! No need to open it in a new tab.",
      isAndMore: false,
    },
    {
      type: "color",
      description:
        "Choose the color of your QR Code! You can select any color you want for your QR Code.",
      isAndMore: false,
    },
    {
      type: "andMore",
      description: "And more!",
      isAndMore: true,
    },
  ];
  return (
    <Stack spacing={2}>
      <Stack direction="row" alignItems="center" gap="20px">
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: "#000",
              display: "inline-block",
              px: "10px",
              py: "5px",
              borderRadius: "20px",
            }}
          >
            Features
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">
            This is a small list of features our extension offers.
            <br />
            There will be more in time!
          </Typography>
        </Box>
      </Stack>
      <Grid container alignSelf="center" sx={{ maxWidth: "80%" }} rowSpacing={2.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <FeatureBlock
              type={feature.type}
              description={feature.description}
              isAndMore={feature.isAndMore}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Features;

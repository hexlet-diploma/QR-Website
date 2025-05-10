import React from "react";
import { Typography, Box, Stack, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
    <Stack spacing={4} alignItems="flex-start">
      <Stack direction="row" alignItems="center" gap={2} flexWrap="wrap">
        <Typography
          variant="h6"
          sx={{
            backgroundColor: "#C9ACF8",
            color: "#000",
            px: 2,
            py: 0.5,
            borderRadius: "10px",
            fontWeight: 600,
          }}
        >
          Features
        </Typography>
        <Typography variant="body1">
          This is a small list of features our extension offers.
          <br />
          There will be more in time!
        </Typography>
      </Stack>

      <Grid container spacing={4} justifyContent="center" maxWidth="md" alignSelf="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index} display="flex" justifyContent="center">
            <FeatureBlock {...feature} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Features;

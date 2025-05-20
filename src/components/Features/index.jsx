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
    <Stack spacing={4} sx={{ alignItems: { xs: "center", md: "flex-start" } }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: "#000",
            px: 2,
            borderRadius: "20px",
            textAlign: "center",
            fontSize: { xs: "32px", md: "48px" },
            display: "inline-block",
            alignSelf: "center",
          }}
        >
          Features
        </Typography>

        <Typography variant="body1" textAlign="center" maxWidth="sm">
          This is a small list of features our extension offers. <br />
          There will be more in time!
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" width="40%" alignSelf="center">
        {features.map((feature, index) => (
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <FeatureBlock {...feature} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Features;

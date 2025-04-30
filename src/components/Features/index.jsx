import React from "react";
import { Typography, Box, Stack, useTheme } from "@mui/material";

const Features = () => {
  const theme = useTheme();

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
      {/* Add more content here */}
    </Stack>
  );
};

export default Features;

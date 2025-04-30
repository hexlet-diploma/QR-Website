import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "../GitHubIcon";

const OpenSourceSection = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ backgroundColor: theme.palette.block.main, padding: "50px", borderRadius: "20px" }}>
      <Stack>
        <Typography variant="h5" sx={{color: theme.palette.headline.main}}>We don't hide code from our users!</Typography>
        <Typography variant="h6">You can check out the source code in the github repository and even suggest new features or bug reports via pull request.</Typography>
      </Stack>
      <GitHubIcon width="100" height="100"/>
    </Stack>
  );
};

export default OpenSourceSection;

import React from "react";
import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ColorPicker from "../../assets/ColorPicker.png";

const FeatureBlock = ({ type = "", description = "", isAndMore = false }) => {
  const theme = useTheme();
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.block.main,
        padding: "50px",
        borderRadius: "50px",
        width: "100%",
        height: "350px",
        maxWidth: "600px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0px 8px 0px ${theme.palette.secondary.main}`,

      })}
    >
      <Stack spacing={2} alignItems="center" justifyContent="center">
        {type === "generate" && (
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: "#fff",
              borderRadius: "10px",
              width: "auto",
            }}
          >
            <Typography variant="h4">Generate QR</Typography>
          </Button>
        )}
        {type === "link" && (
          <TextField id="link-feature" label="https://link.com/" variant="filled" />
        )}
        {type === "copy" && (
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: "#fff",
              borderRadius: "10px",
              width: "auto",
            }}
          >
            <Typography variant="h4">Copy</Typography>
          </Button>
        )}
        {type === "download" && (
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: "#fff",
              borderRadius: "10px",
              width: "auto",
            }}
          >
            <Typography variant="h4">Download</Typography>
          </Button>
        )}
        {type === "color" && (
          <Box
            component="img"
            src={ColorPicker}
            alt="Color Picker"
            sx={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
            }}
          />
        )}
        <Typography variant={type === "andMore" ? "subtitle1" : "h6"}>
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

export default FeatureBlock;

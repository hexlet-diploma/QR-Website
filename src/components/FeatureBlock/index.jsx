import React from "react";
import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ColorPicker from "../../assets/ColorPicker.png";

const FeatureBlock = ({ type = "", description = "", isAndMore = false }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        borderRadius: "24px",
        width: "220px",
        height: "220px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        textAlign: "center",
        boxShadow: "0 8px 0 #c9acf8",
      }}
    >
      <Stack spacing={1} alignItems="center" justifyContent="center">
        {type === "generate" && (
          <Button
            sx={{
              backgroundColor: "#C9ACF8",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "0.875rem",
              textTransform: "none",
              px: 2,
              py: 0.5,
            }}
          >
            Generate QR
          </Button>
        )}
        {type === "link" && (
          <TextField
            variant="filled"
            value="https://link.com/"
            InputProps={{
              disableUnderline: true,
              readOnly: true,
              style: {
                backgroundColor: "#fff",
                borderRadius: "8px",
                fontSize: "0.75rem",
                padding: "6px 8px",
              },
            }}
            sx={{ width: "100%" }}
          />
        )}
        {type === "copy" && (
          <Button
            sx={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              color: "#000",
              borderRadius: "10px",
              fontSize: "0.875rem",
              textTransform: "none",
              px: 2,
              py: 0.5,
            }}
          >
            Copy
          </Button>
        )}
        {type === "download" && (
          <Button
            sx={{
              backgroundColor: "#7EB6FF",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "0.875rem",
              textTransform: "none",
              px: 2,
              py: 0.5,
            }}
          >
            Download
          </Button>
        )}
        {type === "color" && (
          <Box
            component="img"
            src={ColorPicker}
            alt="Color Picker"
            sx={{ width: "48px", height: "48px" }}
          />
        )}
        <Typography
          variant={isAndMore ? "h6" : "body2"}
          sx={{ mt: 1, maxWidth: 180 }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

export default FeatureBlock;

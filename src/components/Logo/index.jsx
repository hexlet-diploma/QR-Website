import React from "react";
import QRGenLogo from "../QRGenLogo";
import { Stack, Typography } from "@mui/material";

const Logo = ({ color }) => {
  return (
    <Stack direction="row" alignItems="center">
      <QRGenLogo width="62" height="62" color={color} />
      <Typography variant="h2">QRCodeGen</Typography>
    </Stack>
  );
};

export default Logo;

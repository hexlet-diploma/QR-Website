import { Stack, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExtensionPicture from "../../assets/ExtensionPicture.png";

const Intro = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack alignItems="flex-start" gap="35px">
        <Typography variant="h1" sx={{ width: "531px" }}>A super handy free QR Code Generator for you</Typography>
        <Typography variant="h4" sx={{ width: "498px" }}>Incredibly easy free extension for your browser that allows you to generate QR code of the current page, your custom links or text in one click.</Typography>
        <Button sx={{ backgroundColor: theme.palette.secondary.main, color: "#fff", borderRadius: "10px", width: "auto" }}>
          <Typography variant="h4">
            Download QRCodeGen
          </Typography>
        </Button>
      </Stack>
      <Box
        component="img"
        src={ExtensionPicture}
        alt="QR Extension"
        sx={{
          maxWidth: "50%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </Stack>
  )
};

export default Intro;
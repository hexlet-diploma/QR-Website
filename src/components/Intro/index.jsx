import { Stack, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExtensionPicture from "../../assets/ExtensionPicture.png";

const Intro = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      spacing={{ xs: 4, md: 0 }}
      sx={{ px: { xs: "16px", md: "0px" } }}
    >
      <Stack alignItems={{ xs: "center", md: "flex-start" }} gap="20px">
        <Typography
          variant="h1"
          textAlign={{ xs: "center", md: "left" }}
          sx={{ fontSize: { xs: "32px", md: "60px" }, width: { xs: "100%", md: "531px" } }}
        >
          A super handy free QR Code Generator for you
        </Typography>

        <Typography
          variant="h4"
          textAlign={{ xs: "center", md: "left" }}
          sx={{ width: { xs: "100%", md: "498px" } }}
        >
          Incredibly easy free extension for your browser that allows you to
          generate QR code of the current page, your custom links or text in one click.
        </Typography>

        <Button
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: "#fff",
            borderRadius: "10px",
            width: "auto",
          }}
        >
          <Typography variant="h4">Download QRCodeGen</Typography>
        </Button>
      </Stack>

      <Box
        component="img"
        src={ExtensionPicture}
        alt="QR Extension"
        sx={{
          width: { xs: "100%", md: "50%" },
          maxWidth: "400px",
          objectFit: "contain",
        }}
      />
    </Stack>
  );
};

export default Intro;

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
      pt={{ xs: 4, md: 10 }}
    >
      {/* Левая колонка (заголовок + текст + кнопка) */}
      <Stack
        sx={{ order: { xs: 1, md: 1 } }}
        alignItems={{ xs: "center", md: "flex-start" }}
        spacing="35px"
      >
        <Typography
          variant="h1"
          textAlign="left"
          sx={{
            fontSize: { xs: "32px", md: "60px" },
            width: { xs: "100%", md: "531px" },
          }}
        >
          A super handy free QR Code Generator for you
        </Typography>

        {/* Картинка вставляется в середину ТОЛЬКО на мобильной версии */}
        <Box
          component="img"
          src={ExtensionPicture}
          alt="QR Extension"
          sx={{
            width: "100%",
            maxWidth: "400px",
            objectFit: "contain",
            display: { xs: "block", md: "none" },
            mt: 2,
          }}
        />

        <Typography
          variant="h4"
          textAlign={{ xs: "center", md: "left" }}
          sx={{ width: { xs: "100%", md: "498px" } }}
        >
          Incredibly easy free extension for your browser that allows you to
          generate QR code of the current page, your custom links or text in one
          click.
        </Typography>

        <Button
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: "#000",
            borderRadius: "10px",
            px: 3,
            py: 1,
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                background: "linear-gradient(135deg, #5151e5 0%, #72edf2 100%)",
                color: "#fff",
                boxShadow: "0 12px 24px rgba(81, 81, 229, 0.35)",
                transform: "translateY(-2px)",
              },
          }}
          href="https://github.com/hexlet-diploma/QRCodeGen/releases/tag/v1.0.1"
          target="_blank"
        >
          <Typography variant="h4">Download QRCodeGen</Typography>
        </Button>
      </Stack>

      {/* Картинка справа — только для десктопа */}
      <Box
        component="img"
        src={ExtensionPicture}
        alt="QR Extension"
        sx={{
          width: { xs: "100%", md: "50%" },
          maxWidth: "400px",
          objectFit: "contain",
          display: { xs: "none", md: "block" },
          order: { md: 2 },
        }}
      />
    </Stack>
  );
};

export default Intro;

import { Stack, Box, Typography, Button, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import QRIcon from "../QRGenLogo";

const Header = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        px: { xs: "16px", md: "0px" },
        flexWrap: "wrap",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <QRIcon width="40" height="40" color="black" />
        <Typography variant="h2" fontSize={{ xs: "20px", md: "40px" }}>
          QRCodeGen
        </Typography>
      </Stack>

      {/* Мобильная версия — бургер */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton>
          <MenuIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Десктопное меню */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={4}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Typography variant="h3">About</Typography>
        <Typography variant="h3">Docs</Typography>
        <Typography variant="h3">Team</Typography>
        <Button
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "#000",
            borderRadius: "10px",
            px: 3,
            py: 1,
          }}
        >
          <Typography variant="h3">Download</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;

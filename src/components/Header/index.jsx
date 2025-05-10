import { Stack, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import QRIcon from "../QRGenLogo";

const Header = () => {  
  const theme = useTheme();
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <QRIcon width="62" height="62" color="black"/>
          <Typography variant="h2">QRCodeGen</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap="70px">
          <Typography variant="h3">
            About
          </Typography>
          <Typography variant="h3">
            Docs
          </Typography>
          <Typography variant="h3">
            Team
          </Typography>
          <Button sx={{ backgroundColor: theme.palette.primary.main, color: "#000", borderRadius: "10px" }}>
            <Typography variant="h3">
              Download
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;

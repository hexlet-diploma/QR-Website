import { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import QRIcon from "../QRGenLogo";

const Header = () => {
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setMenuOpen(open);
  };

  const menuItems = ["About", "Docs", "Team", "Download"];

  return (
    <>
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
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon fontSize="large" color="menu" />
          </IconButton>
        </Box>

        {/* Десктопное меню */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {menuItems.slice(0, 3).map((item) => (
            <Typography variant="h3" key={item}>
              {item}
            </Typography>
          ))}
          <Button
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#000",
              borderRadius: "10px",
              px: 3,
              py: 1,
            }}
            href="https://github.com/hexlet-diploma/QRCodeGen/releases/tag/v1.0.1"
            target="_blank"
          >
            <Typography variant="h3">Download</Typography>
          </Button>
        </Stack>
      </Stack>

      {/* Drawer для мобильного меню */}
      <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
        >
          {/* Кнопка закрытия */}
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon color="menu" />
            </IconButton>
          </Box>

          {/* Навигация */}
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text} onClick={toggleDrawer(false)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;

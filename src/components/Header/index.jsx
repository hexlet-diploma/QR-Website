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

  const menuItems = [
    { label: "About", anchor: "about" },
    { label: "Docs", anchor: "docs" },
    { label: "Team", anchor: "team" },
  ];

  const handleScroll = (anchor) => () => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        {/* Лого и заголовок */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <QRIcon width="40" height="40" color="black" />
          <Typography variant="h2" fontSize={{ xs: "20px", md: "40px" }}>
            QRCodeGen
          </Typography>
        </Stack>

        {/* Мобильное меню */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon fontSize="large" color="menu" />
          </IconButton>
        </Box>

        {/* Десктоп меню */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {menuItems.map(({ label, anchor }) => (
            <Typography
              key={label}
              variant="h3"
              onClick={handleScroll(anchor)}
              sx={{
                cursor: "pointer",
                transition: "all 0.4s ease",
                "&:hover": {
                  color: theme.palette.primary.main,
                  transform: "translateY(-2px)",
                },
              }}
            >
              {label}
            </Typography>
          ))}

          <Button
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#000",
              borderRadius: "10px",
              px: 3,
              py: 1,
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                background: "linear-gradient(135deg, #72edf2 0%, #5151e5 100%)",
                color: "#fff",
                boxShadow: "0 12px 24px rgba(81, 81, 229, 0.35)",
                transform: "translateY(-2px)",
              },
            }}
            href="https://github.com/hexlet-diploma/QRCodeGen/releases/tag/v1.0.1"
            target="_blank"
          >
            <Typography variant="h3" sx={{ transition: "color 0.4s ease" }}>
              Download
            </Typography>
          </Button>
        </Stack>
      </Stack>

      {/* Drawer для мобильного меню */}
      <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }} role="presentation">
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon color="menu" />
            </IconButton>
          </Box>

          <List>
            {menuItems.map(({ label, anchor }) => (
              <ListItem
                button
                key={label}
                onClick={() => {
                  handleScroll(anchor)();
                  setMenuOpen(false);
                }}
              >
                <ListItemText primary={label} />
              </ListItem>
            ))}
            <ListItem
              button
              component="a"
              href="https://github.com/hexlet-diploma/QRCodeGen/releases/tag/v1.0.1"
              target="_blank"
            >
              <ListItemText primary="Download" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;

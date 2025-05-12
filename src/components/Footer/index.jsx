import React from "react";
import {
  Typography,
  Box,
  Stack,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import Logo from "../Logo";
import GitHubIcon from "../GitHubIcon";
import theme from "../../theme";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.footer.main,
        color: "white",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 8 },
        width: "100%",
      }}
    >
      {/* Верхний блок */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
        mb={{ xs: 4, md: 6 }}
      >
        <Logo color="#fff" />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          spacing={{ xs: 2, sm: 4, md: 7 }}
          textAlign={{ xs: "center", sm: "left" }}
        >
          {["About", "Docs", "Team"].map((item) => (
            <Typography
              key={item}
              variant="h3"
              sx={{
                textDecoration: "underline",
              }}
            >
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
              textTransform: "none",
            }}
          >
            <Typography variant="h3">Download</Typography>
          </Button>
        </Stack>
        <GitHubIcon width="42" height="42" color="#fff" />
      </Stack>

      {/* Контентная часть */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", md: "flex-start" }}
        spacing={4}
        mb={{ xs: 4, md: 6 }}
      >
        {/* Контакты */}
        <Stack spacing={1.5}>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: "#000",
                display: "inline-block",
                px: "12px",
                py: "4px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "1.4rem",
              }}
            >
              Contacts
            </Typography>
          </Box>
          <Typography>Email: qrcodegen@gmail.com</Typography>
          <Typography>Phone: +7 (800) 222-75-46</Typography>
          <Typography>All rights belong to Hexlet College.</Typography>
          <Typography>Please voice all complaints by phone above.</Typography>
        </Stack>

        {/* Email-подписка */}
        <Box
          sx={{
            backgroundColor: theme.palette.emailBlock.main,
            p: 3,
            borderRadius: "16px",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "stretch",
            gap: 2,
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              fieldset: { borderColor: "white" },
              borderRadius: "16px",
              minWidth: "250px",
            }}
          />
          <Button
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#000",
              borderRadius: "16px",
              px: 4,
              py: 2,
              fontSize: "1.2rem",
              fontWeight: 500,
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Stack>

      {/* Divider + подпись */}
      <Box>
        <Divider
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            height: "1px",
            mb: 2,
          }}
        />
        <Typography variant="body2" textAlign={{ xs: "center", md: "left" }}>
          © 2025. QRCodeGen  Team 04
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

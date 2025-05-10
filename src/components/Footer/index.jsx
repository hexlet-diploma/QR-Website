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
        py: 6,
        width: "100%",
      }}
    >
      {/* Верхний блок */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={8}
        mb={6}
      >
        <Logo color="#fff" />
        <Stack direction="row" alignItems="center" spacing={7}>
          {["About", "Docs", "Team"].map((item) => (
            <Typography key={item} variant="h3" sx={{ textDecoration: "underline" }}>
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
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        px={8}
        mb={6}
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
          sx={(theme) => ({
            backgroundColor: theme.palette.emailBlock.main,
            p: 4,
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            gap: 2,
          })}
        >
          <TextField
            label="Email"
            variant="outlined"
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              fieldset: { borderColor: "white" },
              borderRadius: "16px",
              width: "300px",
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
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Stack>

      {/* Divider + подпись */}
      <Box px={8}>
        <Divider
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            height: "1px",
            mb: 2,
          }}
        />
        <Typography variant="body2">© 2025. QRCodeGen  Team 04</Typography>
      </Box>
    </Box>
  );
};

export default Footer;

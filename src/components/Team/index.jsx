import React from "react";
import { Stack, Typography, Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Teammate from "../Teammate";

const Team = () => {
  const theme = useTheme();

  const teammates = [
    {
      name: "Nikita Ilkaev",
      role: "Team Lead",
      imgPath: "",
      description: "<Тут текст, который каждый сам себе придумает.>",
    },
    {
      name: "Vasilina Miryan",
      role: "Designer",
      imgPath: "",
      description:
        "JS enthusiast, Figma enjoyer and TS hater. When she can't get a bug fixed, she thinks the world is rotten and there’s nothing left but misery.",
    },
    {
      name: "Elena Kolupaeva",
      role: "Frontend",
      imgPath: "",
      description: "<Тут текст, который каждый сам себе придумает.>",
    },
    {
      name: "Leonid Leonov",
      role: "Quality Engineer",
      imgPath: "",
      description: "<Тут текст, который каждый сам себе придумает.>",
    },
    {
      name: "Ilya Kisel",
      role: "Backend",
      imgPath: "",
      description: "<Тут текст, который каждый сам себе придумает.>",
    },
  ];

  return (
    <Stack spacing={4} alignItems="flex-start">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "#000",
            px: 2,
            borderRadius: "20px",
            textAlign: "center",
            fontSize: { xs: "32px", md: "48px" },
            display: "inline-block",
            alignSelf: "center",
          }}
        >
          Team
        </Typography>

        <Typography variant="body1" textAlign="center" maxWidth="sm">
          We are a small team of students trying our best to make life easier for others! We work only on a sheer power of our motivation and the fury of our academic supervisor.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {teammates.map((teammate, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <Teammate {...teammate} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Team;

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
    <Stack spacing={4}>
      {/* Заголовок */}
      <Stack direction="row" alignItems="center" gap="16px" flexWrap="wrap">
        <Typography
          variant="h6"
          sx={{
            backgroundColor: "#7EB6FF",
            color: "#000",
            px: 2,
            py: 0.5,
            borderRadius: "10px",
            fontWeight: 600,
          }}
        >
          Team
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700 }}>
          We are a small team of students trying our best to make life easier
          for others! We work only on a sheer power of our motivation and the
          fury of our academic supervisor.
        </Typography>
      </Stack>

      {/* Карточки */}
        <Grid container spacing={4} justifyContent="center" alignSelf="center">
          {/* Верхний ряд */}
          <Grid item>
            <Stack direction="row" spacing={4}>
              <Teammate {...teammates[0]} />
              <Teammate {...teammates[1]} />
              <Teammate {...teammates[2]} />
            </Stack>
          </Grid>

          {/* Нижний ряд */}
          <Grid item>
            <Stack direction="row" spacing={4} justifyContent="center">
              <Teammate {...teammates[3]} />
              <Teammate {...teammates[4]} />
            </Stack>
          </Grid>
        </Grid>
    </Stack>
  );
};

export default Team;

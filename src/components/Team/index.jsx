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
      description: "I have some experience in JavaScript, a basic engineering background, and strong hands-on experience in hardware repair. I stay calm under pressure, solve problems efficiently, and always try to support teammates. I value clear communication and a friendly, productive work environment.",
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
      description: "React developer with a passion for creating user-friendly interfaces. I love to learn new things and share my knowledge with others. I believe that teamwork is the key to success.",
    },
    {
      name: "Leonid Leonov",
      role: "Quality Engineer",
      imgPath: "",
      description: "Testing is my nature, I'll break whatever you throw at me. If it ain't broken, soon it will be",
    },
    {
      name: "Ilya Kisel",
      role: "Backend",
      imgPath: "",
      description: "Backend goblin and casual Docker conjurer. Knows that if something works on the first try — it’s probably a trap. Sleeps next to server logs. When the deploy fails at 3 AM, simply stares into the void and accepts fate.",
    },
  ];

  return (
    <Stack spacing={4} alignItems="flex-start" id="team" sx={{ py: 8}}>
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

      {/* Верхний ряд: 3 участника */}
      <Grid container spacing={4} justifyContent="center" alignSelf="center">
        {teammates.slice(0, 3).map((teammate, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <Teammate {...teammate} />
          </Grid>
        ))}
      </Grid>

      {/* Нижний ряд: 2 участника */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }} alignSelf="center">
        {teammates.slice(3, 5).map((teammate, index) => (
          <Grid
            item
            xs={12}
            sm={6}
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

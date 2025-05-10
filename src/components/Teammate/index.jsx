import React from 'react';
import { Stack, Box, Typography, Avatar, Divider } from '@mui/material';
import GitHubIcon from '../GitHubIcon';

const Teammate = ({ name, role, imgPath, description }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '24px',
        boxShadow: '0 8px 0 #c9acf8',
        padding: 3,
        width: 250,
        minHeight: 220,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: "1px solid #000"
      }}
    >
      {/* Верхняя часть: аватар + имя + GitHub */}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Avatar src={imgPath} sx={{ width: 48, height: 48, bgcolor: '#7EB6FF' }} />
        <GitHubIcon width={24} height={24} />
      </Stack>

      <Box mt={1}>
        <Typography variant="h4" sx={{ fontFamily: "Fira Sans" }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Typography variant="caption" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
};

export default Teammate;

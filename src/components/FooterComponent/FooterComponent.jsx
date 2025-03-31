import React from 'react';
import { Box, Typography } from '@mui/material';

export default function FooterComponent() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#F9F9FB',
        padding: '10px 0',
        textAlign: 'center',
        color: '#rgb(0, 25, 148);',
        marginTop: '5vh'
      }}
    >
      <Typography variant="body2">
        projeto desenvolvido na matéria de front-end do curso de análise e desenvolvimento de sistemas da PUCRS 2025
      </Typography>
    </Box>
  );
}

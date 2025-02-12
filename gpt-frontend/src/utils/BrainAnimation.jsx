import React from 'react';
import { Box } from '@mui/material';

const BrainAnimation = () => {
  return (
    <Box
      sx={{
        width: '200px',
        height: '200px',
        margin: '20px auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'url("assets/brain-outline.svg") no-repeat center center',
          backgroundSize: 'contain',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
          animation: 'pulse 2s infinite',
        },
        '@keyframes pulse': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: 0.7,
          },
          '50%': {
            transform: 'scale(1)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(0.95)',
            opacity: 0.7,
          },
        },
      }}
    />
  );
};

export default BrainAnimation;

import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

// import { RingbearerMedium } from '../../fonts/RingbearerMedium.ttf';
import { createTheme } from '@mui/system';
import { useTheme } from '@mui/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'RingbearerMedium',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: RingbearerMedium;
        font-style: normal;
        font-display: swap;
         font-weight: 800;
      }`,
    },
  },
});

export default function FilmList({ title, box_office_total, academy_award_nominations }) {
  const filmImage = `${process.env.PUBLIC_URL}/films/${title
    .toLowerCase()
    .replace(/\s+/g, '-')}.jpeg`;
  return (
    <Card className="films" sx={{ maxWidth: 350 }}>
      <CardMedia component="img" height="500" image={filmImage}></CardMedia>
      <CardContent>
        <Typography theme={theme}>{title}</Typography>
        <Typography theme={theme}>Box Office Total: {box_office_total}</Typography>
        <Typography theme={theme}>
          Academy Award Nominations: {academy_award_nominations}
        </Typography>
      </CardContent>
    </Card>
  );
}

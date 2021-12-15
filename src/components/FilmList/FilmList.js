import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './FilmList.css';

export default function FilmList({ title, box_office_total, academy_award_nominations }) {
  const filmImage = `${process.env.PUBLIC_URL}/films/${title
    .toLowerCase()
    .replace(/\s+/g, '-')}.jpeg`;
  return (
    <Card className="films" sx={{ maxWidth: 350 }}>
      <CardMedia component="img" height="500" image={filmImage}></CardMedia>
      <CardContent className="card-content">
        <Typography>{title}</Typography>
        <Typography>Box Office Total: {box_office_total}</Typography>
        <Typography>Academy Award Nominations: {academy_award_nominations}</Typography>
      </CardContent>
    </Card>
  );
}

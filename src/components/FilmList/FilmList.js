import React from 'react';

export default function FilmList({ title, box_office_total, academy_award_nominations }) {
  return (
    <section className="films">
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/films/${title
            .toLowerCase()
            .replace(/\s+/g, '-')}.jpeg`,
        }}
      >
        image
      </div>
      <div>{title}</div>
      <div>Box Office Total: {box_office_total}</div>
      <div>Academy Award Nominations: {academy_award_nominations}</div>
    </section>
  );
}

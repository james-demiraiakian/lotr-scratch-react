import React, { useState, useEffect } from 'react';
import { fetchFilms } from '../../services/films';
import FilmList from '../../components/FilmList/FilmList';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {films.map((f) => {
        return <FilmList key={f.id} {...f} />;
      })}
    </div>
  );
}

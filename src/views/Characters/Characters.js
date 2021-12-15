import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharacterList from '../../components/CharacterList/CharacterList';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race, query);
      setCharacters(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [query, race, loading]);
  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          placeholder="Search"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setLoading(true);
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <select value={race} onChange={(e) => setRace(e.target.value)}>
          <option value="All">All</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Human">Human</option>
          <option value="Maiar">Maiar</option>
          <option value="Orc">Orc</option>
        </select>
      </div>
      <div>
        {characters.map((c) => {
          return <CharacterList key={c.id} {...c} />;
        })}
      </div>
    </>
  );
}

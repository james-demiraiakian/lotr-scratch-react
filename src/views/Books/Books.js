import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';
import BookList from '../../components/BookList/BookList';

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {books.map((b) => {
        return <BookList key={b.id} {...b} />;
      })}
    </div>
  );
}

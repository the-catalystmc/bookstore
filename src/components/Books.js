import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const allBooks = useSelector((state) => state.books.books);
  const booksStatus = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (booksStatus === false) {
      dispatch(fetchBooks());
    }
  }, []);

  const updateBooks = allBooks.map((book) => <Book key={book.id} book={book} />);

  return (
    <div className="Main-Holder">
      <ul className="Books-Holder">{updateBooks}</ul>
      <div className="Border" />
      <Form />
    </div>
  );
};

export default Books;

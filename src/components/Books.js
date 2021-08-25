import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const allBooks = useSelector((state) => state.books.books);
  console.log(allBooks);
  const booksStatus = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (booksStatus === false) {
      dispatch(fetchBooks());
    }
  }, [booksStatus, dispatch]);

  const updateBooks = allBooks.map((book) => <Book key={book.id} book={book} />);

  return (
    <div>
      <ul>{updateBooks}</ul>
      <Form />
    </div>
  );
};

export default Books;

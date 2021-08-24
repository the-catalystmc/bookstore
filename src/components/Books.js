import React from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => (
  <div>
    <Book
      genre="Drama"
      title="Lord of The Flies"
      author="William Golding"
    />
    <Form />
  </div>
);

export default Books;

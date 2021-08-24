import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const allBooks = useSelector((state) => state.books);

  const updateBooks = allBooks.map((book) => <Book key={book.id} book={book} />);

  return (
    <div>
      <ul>{updateBooks}</ul>
      <Form />
    </div>
  );
};

export default Books;

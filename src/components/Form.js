import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Drama');

  // const dispatch = useDispatch();

  const titleChanged = (e) => setTitle(e.target.value);
  const authorChanged = (e) => setAuthor(e.target.value);
  const genreChanged = (e) => setGenre(e.target.value);

  // const submitBookToStore = (e) => {
  //   e.preventDefault();
  //   if (title && genre && author) {
  //     const newBook = {
  //       id: uuidv4(),
  //       title,
  //       author,
  //       genre,
  //     };

  //     dispatch an action and pass it the newBook object (your action's payload)
  //     dispatch(addBook(newBook));

  //     setTitle('');
  //     setAuthor('');
  //     setGenre('Drama');
  //   }
  // };

  return (
    <div>
      <form>
        <h2>ADD NEW BOOK</h2>
        <input type="text" name="title" value={title} onChange={titleChanged} placeholder="Title" required />
        <input type="text" name="author" value={author} onChange={authorChanged} placeholder="Author" required />
        <select name="genre" value={genre} onChange={genreChanged}>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
        </select>
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default Form;

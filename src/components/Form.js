import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import '../scss/style.scss';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Drama');

  const dispatch = useDispatch();

  const titleChanged = (e) => setTitle(e.target.value);
  const categoryChanged = (e) => setCategory(e.target.value);

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title && category) {
      dispatch(
        addBook({
          item_id: uuidv4(),
          category,
          title,
        }),
      );
      setTitle('');
      setCategory('Drama');
    }
  };

  return (
    <div>
      <form>
        <h2 className="Add-Title">ADD NEW BOOK</h2>
        <input className="Input1" type="text" name="title" value={title} onChange={titleChanged} placeholder="Book Title" required />
        <select className="Input2" name="category" value={category} placeholder="Category" onChange={categoryChanged} required>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
        </select>
        <input className="Input3" type="submit" value="ADD BOOK" onClick={submitBookToStore} />
      </form>
    </div>
  );
};

export default Form;

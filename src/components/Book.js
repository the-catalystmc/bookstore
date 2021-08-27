import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../scss/style.scss';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;

  const {
    id, category, title, author,
  } = book;

  const dispatch = useDispatch();

  const removesBook = () => {
    dispatch(
      removeBook({
        id,
      }),
    );
  };

  return (
    <div className="Book-Container">
      <div className="Book-Info">
        <p className="Genre">{category}</p>
        <h3 className="Title">{title}</h3>
        <p className="Author">{author}</p>
        <div className="Book-Edits">
          <button type="button" className="Edit-Item">Comments</button>
          <span className="Edit-Item">|</span>
          <button type="button" className="Edit-Item Edit-Item2" onClick={removesBook}>Remove</button>
          <span className="Edit-Item">|</span>
          <button type="button" className="Edit-Item">Edit</button>
        </div>
      </div>
      <div className="Book-Stats">
        <div className="Completion">
          <div className="Circle" />
          <div className="Book-Stats1">
            <p className="Percent">100%</p>
            <p className="Status">Completed</p>
          </div>
        </div>
        <span className="Partition" />
        <div className="Chapter-Stats">
          <p className="Current-Chapter">CURRENT CHAPTER</p>
          <p className="Chapter-Number">Chapter 17</p>
          <button className="Update-Progress" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  genre: PropTypes.any,
  title: PropTypes.any,
  author: PropTypes.any,
}.isRequired;

export default Book;

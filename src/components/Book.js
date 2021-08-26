import React from 'react';
// import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../scss/style.scss';
// import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;

  const {
    genre, title, author,
  } = book;

  // const dispatch = useDispatch();

  // const removesBook = () => {
  //   dispatch(
  //     removeBook({
  //       id,
  //     }),
  //   );
  // };

  return (
    <div className="Book-Container">
      <div className="Book-Info">
        <p className="Genre">{genre}</p>
        <h3 className="Title">{title}</h3>
        <p className="Author">{author}</p>
        <div className="Book-Edits">
          <button type="button" className="Edit-Item">Comments</button>
          <span className="Edit-Item">|</span>
          <button type="button" className="Edit-Item">Remove</button>
          <span className="Edit-Item">|</span>
          <button type="button" className="Edit-Item">Edit</button>
        </div>
      </div>
      <div className="Book-Stats">
        <div className="Completion">
          <div className="Circle" />
          <div>
            <p>64%</p>
            <p>Completed</p>
          </div>
        </div>
        <span className="Partition" />
        <div className="Chapter-Stats">
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
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

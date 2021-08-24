import React from 'react';
import { PropTypes } from 'prop-types';
import '../scss/style.scss';

const Book = (props) => {
  const { genre, title, author } = props;

  return (
    <div className="Book-Container">
      <div className="Book-Info">
        <p className="Genre">{genre}</p>
        <h3 className="Title">{title}</h3>
        <p className="Author">{author}</p>
        <div className="Book-Edits">
          <p className="Edit-Item">Comments</p>
          <span className="Edit-Item">|</span>
          <p className="Edit-Item">Remove</p>
          <span className="Edit-Item">|</span>
          <p className="Edit-Item">Edit</p>
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

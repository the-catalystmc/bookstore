import React from 'react';
import { PropTypes } from 'prop-types';
import '../scss/style.scss';

const Categories = (props) => {
  const { text } = props;
  return (
    <div className="Categories-Container">{text}</div>
  );
};

Categories.propTypes = {
  text: PropTypes.any,
}.isRequired;

export default Categories;

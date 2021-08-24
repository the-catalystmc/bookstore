import React from 'react';

const Form = () => (
  <div>
    <form>
      <h2>ADD NEW BOOK</h2>
      <input type="text" name="title" placeholder="Title" required />
      <input type="text" name="author" placeholder="Author" required />
      <select name="genre">
        <option value="Drama">Drama</option>
        <option value="Action">Action</option>
      </select>
      <input type="submit" value="ADD BOOK" />
    </form>

  </div>
);

export default Form;

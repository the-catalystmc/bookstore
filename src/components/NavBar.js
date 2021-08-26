import React from 'react';
import {
  Link,
} from 'react-router-dom';
import '../scss/style.scss';

const NavBar = () => (
  <div className="Nav-Container">
    <h1>Bookstore CMS</h1>
    <nav>
      <ul className="Nav-Items">
        <li className="Nav-Item"><Link exact to="/">Books</Link></li>
        <li className="Nav-Item"><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
  </div>
);

export default NavBar;

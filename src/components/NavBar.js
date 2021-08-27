import React from 'react';
import { FaUser } from 'react-icons/fa';
import {
  Link,
} from 'react-router-dom';
import '../scss/style.scss';

const NavBar = () => (
  <div className="Nav-Container">
    <h1>Bookstore CMS</h1>
    <nav>
      <ul className="Nav-Items">
        <li className="Nav-Item1"><Link exact to="/">BOOKS</Link></li>
        <li className="Nav-Item2"><Link to="/categories">CATEGORIES</Link></li>
      </ul>
      <button className="user" type="button">
        <FaUser className="userIcon" />
      </button>
    </nav>
  </div>
);

export default NavBar;

import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h2>
        <Link to="/">BA Recipes</Link>
      </h2>
      <p>
        <Link to="/user">Profile image</Link>
      </p>
    </div>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link data-testid="main-link" to="/">
        main
      </Link>
      <Link data-testid="about-link" to="/about">
        about
      </Link>
      <Link data-testid="users-link" to="/users">
        users
      </Link>
    </div>
  );
};

export default Navbar;

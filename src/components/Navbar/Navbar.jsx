import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link data-testid="main-link" to="/">
        main
      </Link>
      &nbsp;
      <Link data-testid="about-link" to="/about">
        about
      </Link>
      &nbsp;
      <Link data-testid="users-link" to="/users">
        users
      </Link>
      &nbsp;
      <Link data-testid="counter-link" to="/counter">
        counter
      </Link>
    </div>
  );
};

export default Navbar;

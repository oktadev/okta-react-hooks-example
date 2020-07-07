import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/landing">Landing</Link>
  </nav>
);

export default Navigation;

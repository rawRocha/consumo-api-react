import React from 'react';
import { FaSignInAlt, FaHome, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}

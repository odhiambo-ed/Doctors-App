/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './NavBar.module.css';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="Nav">
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: 'red', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
      <Link
        onClick={() => closeMenu()}
        to="/doctors"
        className="Nav-brand"
      >
        Doctors
      </Link>
      <ul className={`Nav-links menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li className="Nav-item">
          <Link
            onClick={() => closeMenu()}
            className="Nav-link"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="Nav-item">
          <Link
            onClick={() => closeMenu()}
            className="Nav-link"
            to="/reserve"
          >
            Reserve
          </Link>
        </li>
        <li className="Nav-item">
          <Link
            onClick={() => closeMenu()}
            className="Nav-link"
            to="/reservations"
          >
            My reservations
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
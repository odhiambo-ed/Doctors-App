import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Parse from 'parse';

import './Navbar.css';
import { Link } from 'react-router-dom';
import { logout } from '../slices/auth';
import EventBus from '../common/EventBus';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes('ROLE_MODERATOR'));
      setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, [currentUser, logOut]);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <h2>Doctors appointment</h2>
      </a>
      <button
        type="button"
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul>

          <div>

            {showModeratorBoard && (
            <li>
              <Link to="/mod">
                Moderator Board
              </Link>
            </li>
            )}

            {showAdminBoard && (
            <li>
              <Link to="/admin">
                Admin Board
              </Link>
            </li>
            )}

            {currentUser && (
            <li>
              <Link to="/user">
                User
              </Link>
            </li>
            )}
          </div>

          {currentUser ? (
            <div>
              <li>
                <Link to="/profile">
                  {currentUser.username}
                </Link>
              </li>
              <li>
                <a href="/login" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/register">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
          <li>
            <a href="/doctors">Doctors</a>
          </li>
          <li>
            <a href="/appointments">Appointments</a>
          </li>
          <li>
            <a href="/doctors/book">Book an Appointment</a>
          </li>
          <li>
            <a href="/doctors/new">Add Doctor</a>
          </li>
          <li>
            <a href="/doctors/delete">Delete Doctor</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

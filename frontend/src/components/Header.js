import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => (
  <div>
    <Navbar />
    <main className="main">
      <Outlet />
    </main>
  </div>
);
export default Header;

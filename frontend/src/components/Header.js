import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => (
  <div>
    <main className="main">
      <Outlet />
    </main>
  </div>
);
export default Header;

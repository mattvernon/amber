import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <Header className="Header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </Header>
  );
};

export default Header;

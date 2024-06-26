import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import LogoSvg from '../../assets/Logo/InStock-Logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className='header__container'>
      <div className="header__logo">
        <NavLink to="/">
          <img src={LogoSvg} alt="Instock Logo" />
        </NavLink>
      </div>
      <nav className="header__nav">
        <NavLink
        to="/"
        className={({ isActive }) => 
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          Warehouses
        </NavLink>
        <NavLink
          to="/inventory"
          className={({ isActive }) => 
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          Inventory
        </NavLink>
      </nav>
      </div>
    </header>
  );
};

export default Header;
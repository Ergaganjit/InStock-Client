import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Logo1x from '../../assets/Logo/InStock-Logo_1x.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo1x} alt="Instock Logo" />
      </div>
      <nav className="header__nav">
        <Link to="/warehouses" className="header__link">Warehouses</Link>
        <Link to="/inventory" className="header__link">Inventory</Link>
      </nav>
    </header>
  );
};

export default Header;
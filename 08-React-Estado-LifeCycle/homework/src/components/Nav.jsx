import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from '../styles/Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={s.nav}>
      <img className={s.logoHenry} src={Logo} alt="" />
      <h3 className={s.title}>Henrry - Weather App</h3>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;

import React from 'react';
import s from '../styles/Searchbar.module.css';
export default function SearchBar(alerta) {
  // acá va tu código
console.log(alerta);
 var handleClick = () => {
    alerta.onSearch(document.getElementById("cityName").value);
  }
 

  return <div className={s.searchbar}>Search Bar Component
    <br/>
    
    <input id="cityName" type="text" placeholder='Ciudad ...' className={s.input}></input>
    <button onClick={handleClick} className={s.btn}>Agregar</button>
    
    <br/>
    <br/>
  </div>
};
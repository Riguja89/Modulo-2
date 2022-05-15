import React from 'react';
import s from '../styles/Searchbar.module.css';
export default function SearchBar({onSearch}) {
  // acá va tu código
//console.log(alerta);

 

  return <form onSubmit={(e) => {
    e.preventDefault();
    onSearch(document.getElementById("cityName").value);
  }} className={s.searchbar}>
    <input id="cityName" type="text" placeholder='Ciudad ...' className={s.input}></input>
    <button  type="submit"  className={s.btn}>Agregar</button>
   
  </form>
};



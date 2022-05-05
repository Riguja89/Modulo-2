import React from 'react';

export default function SearchBar(alerta) {
  // acá va tu código
console.log(alerta);
 var handleClick = () => {
    alerta.onSearch(document.getElementById("cityName").value);
  }
 

  return <div>Search Bar Component
    <br/>
    
    <input id="cityName" type="text" placeholder='Ciudad ...'></input>
    <button onClick={handleClick}>Agregar</button>
    
    <br/>
    <br/>
  </div>
};
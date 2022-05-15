import './App.css';
import React, { useState } from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';

const apiKey='4ae2636d8dfbdc3044bede63951a019b'

export default function App() {

  const [cities, setCities] = useState([]);

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <div>
        <Nav onSearch={onSearch}
        />
      </div>
      <hr />
      {/* <div>
        <Card
          // max={Cairns.main.temp_max}
          // min={Cairns.main.temp_min}
          // name={Cairns.name}
          // img={Cairns.weather[0].icon}
          // onClose={() => alert(Cairns.name)}
        />
      </div>
      */}
      <hr />
      <div>
        <Cards
           cities={cities}
           onClose={onClose}
        />
      </div> 
    </div>
    
  );


function onSearch(ciudad) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
        console.log(ciudad);
      } else {
        alert("Ciudad no encontrada");
      }
    });

  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

}

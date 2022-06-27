import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route} from 'react-router-dom';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  var ciudad={};

  function detalle(id){
   
    cities.forEach(element => {
      if (parseInt(element.id)===parseInt(id)){
        ciudad=element;
        
      }
    });
   
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`)
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
            weather: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            pres: recurso.main.pressure,
            hum: recurso.main.humidity
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }



  const Root = (
    <div className="App">

<Nav onSearch={onSearch} />

<Route
    exact path='/'
    render={() => <Cards  cities={cities} onClose={onClose} detalle={detalle}/>}
/>
<Route
    path='/citi/:id'
    render={() => <Cards  cities={cities} onClose={onClose} detalle={detalle}/>}
/>

<Route
    path='/citi/:id'
    render={() => <Ciudad   ciudad={ciudad}/>}
/>
<Route
   exact path='/about'
    component={About}
/>



  </div>
 );

  return (Root);
}

export default App;


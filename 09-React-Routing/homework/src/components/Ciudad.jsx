import React from 'react';
import './Ciudad.css';
import { useHistory } from 'react-router-dom';


export default function Ciudad({ciudad}) {
    let history = useHistory();
    
    let back = e => {
        e.stopPropagation();
        history.goBack();
      };
     
      //console.log(ciudad);
     

  return (
    <div onClick={back}
     style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.3)"
      }}>
    

     <div className='ciudad' >
     <h1> {ciudad.name} </h1>  
     <div className='temp'>
        <p>Min</p>
        <p>{ciudad.min}°c</p>
     </div>
     <div className='temp'>
     <p>Max</p>
        <p>{ciudad.max}°c</p>
     </div>
     <div className='temp'>
        <p>Temp </p>
        <p>{ciudad.temp}°c</p>
     </div>
     <div className='temp'>
        <p>Clima</p>
        <p>{ciudad.weather}</p>
     </div>
     <div>
        <p>{ciudad.clouds}% nublado</p>
     </div>
     <div className='temp'>
        <p>Velocidad de Viento</p>
        <p>{ciudad.wind} Km/h</p>
     </div>
     <div className='temp'>
        <p>Presion</p>
        <p>{ciudad.pres} Pa</p>
     </div>
     <div className='temp'>
        <p>Humedad Relativa</p>
        <p>{ciudad.hum}%</p>
     </div>
     <div className='ubicacion'>
        <p>Latitud</p>
        <p>{ciudad.latitud}</p>
        <p>Longitud</p>
        <p>{ciudad.longitud}</p>
     </div>
     <div >
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+ciudad.img+"@4x.png"} alt="" />
            </div>
        
        </div>   
        
    </div>


  );
}
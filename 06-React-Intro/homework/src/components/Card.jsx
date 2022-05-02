import React from 'react';

export default function Card({max, min, name,img, onClose }) {
  // acá va tu código
const url=`http://openweathermap.org/img/wn/${img}@2x.png`

var handleClick = () => {
  onClose();
}
  return <div>
    <div onClick={handleClick} >
      X
    </div>
    <h1>{name}</h1>
    <h2> Min {min}</h2>
    <h2>Max {max}</h2>
    <div>
      <img src={url} alt="" />
    </div>

  </div>
};
import React from 'react';
import s from '../styles/Card.module.css';
export default function Card({max, min, name,img,id,onClose }) {
  // acá va tu código
const url=`http://openweathermap.org/img/wn/${img}@2x.png`

var handleClick = () => {
  onClose(id);
}
  return <div className={s.card}>
    <button onClick={handleClick} className={`${s.btn}`}>
      X
    </button>
    <h1>{name}</h1>
    <h2> Min {min}</h2>
    <h2>Max {max}</h2>
    <div>
      <img src={url} alt="" />
    </div>

  </div>
};
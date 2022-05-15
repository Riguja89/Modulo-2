import React from 'react';
import Card from './Card.jsx';
import s from '../styles/Cards.module.css';
export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={s.Cards}>
  {
    cities.map(p=><Card 
      max={p.main.temp_max}
      min={p.main.temp_min}
      name={p.name}
      img={p.weather[0].icon}
      onClose={() => alert(p.name)}
      key={p.id}
    /> )
  }
  </div>
};
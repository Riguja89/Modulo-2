import React from 'react';
import Card from './Card.jsx';
import s from '../styles/Cards.module.css';
export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  console.log(cities);
  return <div className={s.Cards}>
  {
    
    cities.map(p=><Card 
      max={p.max}
      min={p.min}
      name={p.name}
      img={p.img}
      id={p.id}
      onClose={onClose}
      key={p.id}
    /> )
  }
  </div>
};
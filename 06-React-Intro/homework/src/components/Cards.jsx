import React from 'react';
import Card from './Card.jsx';
export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div >
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
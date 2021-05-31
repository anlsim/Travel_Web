import * as React from 'react';

import './CounterBar.scss';
const {useState} = React;
const start = new Date(2021, 4, 28);
const today = new Date();
//const daysCounter  = today - start;

export default function CounterBar() {
       const [citiesCounter, setCitiesCounter] = useState(10);
       //const [daysCounter, setDaysCounter] = useState(today - start);
       const daysCounter  =  Math.ceil((today - start + 1) / 86400000);
       return(     
       <div className="Bar">
              <h1 id="titleBar">Cities Visited: {citiesCounter}</h1>
              <h1 id="titleBar">Days on the road: {daysCounter}</h1>
       
       </div>
        
       );
   
}

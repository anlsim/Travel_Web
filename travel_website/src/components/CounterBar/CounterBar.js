import * as React from 'react';

import './CounterBar.scss';
const {useState} = React;

export default function CounterBar() {
       const [citiesCounter, setCitiesCounter] = useState(10);
       const [daysCounter, setDaysCounter] = useState(10);
       return(     
       <div className="Bar">
              <h1 id="titleBar">Cities Visited: {citiesCounter}</h1>
              <h1 id="titleBar">Days on the road: {daysCounter}</h1>
       
       </div>
        
       );
   
}

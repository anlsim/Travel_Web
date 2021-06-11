import * as React from 'react';
import './CounterBar.scss';


export default function CounterBar({cities}) {
       const start = new Date(2021, 4, 28);
       const today = new Date();
       const daysCounter  =  Math.ceil((today - start + 1) / 86400000);
       // const cities = PostData.map(obj => obj.cityName);
       return(     
       <div className="Bar">
              <h1 className="titleBar">Cities Visited: {cities.length}</h1>
              <h1 className="titleBar">Days on the road: {daysCounter}</h1>
       
       </div>
        
       );
   
}

import React from 'react';
import Map from '../../components/Map/Map';
import Hero from '../../components/Hero/Hero';
import CounterBar from '../../components/CounterBar/CounterBar'
import "./MapPage.scss";

const MapPage = () =>(
    <div>
        <Hero title={'Map'}/>
        <div className="mapDiv">
            <Map />
        </div>   
        
        <CounterBar/>
    </div>
);

export default MapPage;
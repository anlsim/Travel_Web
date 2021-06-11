import React from 'react';
import Map from '../../components/Map/Map';
import Hero from '../../components/Hero/Hero';
import "./MapPage.scss";


const MapPage = () =>{
    
    return(
        <div>
            <Hero title={'Map'}/>
            <div className="mapDiv">
                <Map />
            </div>   
        </div>
    )
};

export default MapPage;
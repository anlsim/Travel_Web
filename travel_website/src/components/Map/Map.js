import React, { Component } from 'react';
import USAMap from "react-usa-map";
import PostData from "../PostList/PostData";
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import'./Map.scss';






const updates = PostData.filter(updates => updates['stateName']);
const coordinates = PostData.map(a => a.location);
console.log(coordinates);
const position = [38.958988, -77.417320];

const limeOptions = { color: 'blue', weight: 5 }

const redOptions = { color: 'red', weight: 10 }


const LOCATION = {
  lat: 37.9072,
  lng: -95.58
};
const polyline = [
  [38.958988, -77.417320],
  [36.627517, -83.621635],
  [45.494716, -115.464968],
  [47.283049, -120.760049],
]
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 4.5;

class Map extends Component {
  
  // mapHandler = (event) => {
  //   let stateName = event.target.dataset.name;
  //   window.location.href = '/state/' + (stateName);
  // };
 
  // statesCustomConfig = {
    
  //   TX: {
  //     fill: "#9DD9D2",
     
  //   },
  //   NY: {
  //     fill: "#9DD9D2",
  //   },
  //   CO: {
  //     fill: "#9DD9D2",
  //   },
  // }
  
  render() {
    const mapSettings = {
      center: CENTER,
      defaultBaseMap: 'OpenStreetMap',
      zoom: DEFAULT_ZOOM,
    };
  
    return (
  //     <div className="Apps">
  //       <USAMap customize={this.statesCustomConfig} onClick={this.mapHandler} />
  //     </div>
  <div id="mapId">
  <MapContainer {...mapSettings}> 
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
  <Polyline pathOptions={limeOptions} positions={coordinates} />
    {
      coordinates.map((location, id)=>(
        <Circle key = {id} center={location} pathOptions={redOptions} radius={200} />))
    }
    
  </Marker>
</MapContainer> 
</div>
  
    );
  }
  
}

export default Map;
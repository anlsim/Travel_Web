import React, { Component } from 'react';
// import USAMap from "react-usa-map";
import PostData from "../PostList/PostData";
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import'./Map.scss';


const updates = PostData.filter(updates => updates['stateName']);
const coordinates = PostData.map(a => a.location);

const lineColor = { color: '#FF8811', weight: 5 }
const circleColor = { color: '#221C35', weight: 10 }


const LOCATION = {
  lat: 37.9072,
  lng: -95.58
};

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
    <Polyline pathOptions={lineColor} positions={coordinates} />
      {
        coordinates.map((location, id)=>(
          
          <Circle key = {id} center={location} pathOptions={circleColor} radius={100} />
        ))
          
      }
  </MapContainer> 
</div>
  
    );
  }
  
}

export default Map;
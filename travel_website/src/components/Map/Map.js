import {useEffect, useState} from 'react';
import axios from "axios";
import { MapContainer, TileLayer,  Popup, Circle, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import'./Map.scss';


export default function Map() {
  
  const[posts, setPosts] = useState([]);
  const[loading, setloading] = useState(true);
  useEffect(()=>{
      const fetchPost = async ()=> {
          const res = await axios.get("/posts");
          setPosts(res.data);
          setloading(false);
          
      }
     
      fetchPost();
  }, [])
  if(loading) return <h4>Loading map...</h4>

  const coordinates = posts.filter(a => a.location.length > 0).map(p => p.location);
  const lineColor = { color: '#FF8811', weight: 5 }
  const circleColor = { color: '#221C35', weight: 10 }


  const LOCATION = {
    lat: 37.9072,
    lng: -95.58
  };

  const CENTER = [LOCATION.lat, LOCATION.lng];
  const DEFAULT_ZOOM = 4.5;
  const mapSettings = {
      center: CENTER,
      defaultBaseMap: 'OpenStreetMap',
      zoom: DEFAULT_ZOOM,
    };
  return (
    <div className="mapId">
      <MapContainer {...mapSettings} > 
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline pathOptions={lineColor} positions={coordinates} />
        {
          posts.filter(a => a.location.length > 0).map(object=>(
            
            <Circle key = {object.id} center={object.location} pathOptions={circleColor} radius={100}>
              
              <Popup>{object.city +", "+ object.state}</Popup> 
            </Circle>
          
          ))
        }
      </MapContainer> 
  </div>
  )
}




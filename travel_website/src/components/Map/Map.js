import {useEffect, useState} from 'react';
import axios from "axios";
import PostData from "../PostList/PostData";
import { MapContainer, TileLayer,  Popup, Circle, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import'./Map.scss';


export default function Map({postsList}) {
  
  // const[locations, setLocation] = useState([]);
  // useEffect(()=>{
  //     const fetchPost = async ()=> {
  //         const res = await axios.get("/posts");
          
  //         setLocation(res.data);
          
  //     }
  //     fetchPost();
  // }, []);
  console.log(postsList);

  const soemthing = postsList.map(obj => obj.location);
  console.log("This is something: " +soemthing);
  const coordinates = postsList.map(obj => obj.location);
 console.log("This is coordinates: " +coordinates);
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
    <div id="mapId">
      <MapContainer {...mapSettings} > 
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline pathOptions={lineColor} positions={coordinates} />
            {
              coordinates.map((location, id)=>(
                
                <Circle key = {id} center={location} pathOptions={circleColor} radius={100}>
              
              <Popup>
                {location}
                </Popup>
                  
                </Circle>
          
              )
              )
                
            }
      </MapContainer> 
  </div>
  )
}







// import React, { Component } from 'react';
// import PostData from "../PostList/PostData";
// import { MapContainer, TileLayer,  Popup, Circle, Polyline } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import'./Map.scss';



// const coordinates = PostData.map(obj => obj.location);

// const lineColor = { color: '#FF8811', weight: 5 }
// const circleColor = { color: '#221C35', weight: 10 }


// const LOCATION = {
//   lat: 37.9072,
//   lng: -95.58
// };

// const CENTER = [LOCATION.lat, LOCATION.lng];
// const DEFAULT_ZOOM = 4.5;

// class Map extends Component {

//   // mapHandler = (event) => {
//   //   let stateName = coordinates;
//   //   window.location.href = '/state/' + (stateName);
//   // };
//   //coordinates
  
//   render() {
//     const mapSettings = {
//       center: CENTER,
//       defaultBaseMap: 'OpenStreetMap',
//       zoom: DEFAULT_ZOOM,
//     };
    

//     return (
//   //     <div className="Apps">
//   //       <USAMap customize={this.statesCustomConfig} onClick={this.mapHandler} />
//   //     </div>
//   <div id="mapId">
//   <MapContainer {...mapSettings} > 
//     <TileLayer
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Polyline pathOptions={lineColor} positions={coordinates} />
//       {
//         coordinates.map((location, id)=>(
          
//           <Circle key = {id} center={location} pathOptions={circleColor} radius={100}>
         
//          <Popup>
//           {location}
//           </Popup>
            
//           </Circle>
    
//         )
//         )
          
//       }
//   </MapContainer> 
// </div>
  
//     );
//   }
  
// }

// export default Map;
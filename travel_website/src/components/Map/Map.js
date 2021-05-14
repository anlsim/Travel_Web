import React, { Component } from 'react';
import USAMap from "react-usa-map";
import PostData from "../PostList/PostData";


const updates = PostData.filter(updates => updates['stateName']);
class Map extends Component {
  
  mapHandler = (event) => {
    let stateName = event.target.dataset.name;

    

   
    window.location.href = '/state/' + (stateName);

  };
 
  statesCustomConfig = {
    
    TX: {
      fill: "#9DD9D2",
     
    },
    NY: {
      fill: "#9DD9D2",
    },
    CO: {
      fill: "#9DD9D2",
    },
  }
  
  render() {
    
    return (
      <div className="Apps">
        <USAMap customize={this.statesCustomConfig} onClick={this.mapHandler} />

      </div>
  
    );
  }
  
}

export default Map;
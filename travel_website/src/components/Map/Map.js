import React, { Component } from 'react';
import USAMap from "react-usa-map";




class Map extends Component {
  
  mapHandler = (event) => {
    let stateName = event.target.dataset.name;

    
   
    window.location.href = '/update/' + (stateName);

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
      <div className="App">
        <USAMap customize={this.statesCustomConfig} onClick={this.mapHandler} />

      </div>
  
    );
  }
  
}

export default Map;
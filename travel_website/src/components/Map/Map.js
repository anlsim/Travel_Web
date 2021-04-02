import React, { Component } from 'react';
import USAMap from "react-usa-map";




class Map extends Component {
  
  mapHandler = (event) => {
    let stateName = event.target.dataset.name;

    
   
    window.location.href = '/update/' + (stateName);

  };

  statesCustomConfig = {
    NJ: {
      fill: "navy",
     
    },
    NY: {
      fill: "#CC0000",
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
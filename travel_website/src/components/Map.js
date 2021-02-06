import React, { Component } from 'react';
import USAMap from "react-usa-map";

class Map extends Component {

  mapHandler = (event) => {
    var stateName = event.target.dataset.name;
    alert(stateName);
  };
  
  render() {
    return (
      <div className="App">
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}

export default Map;
import React, { Component } from 'react';
import USAMap from "react-usa-map";
import Modal from 'react-bootstrap/Modal';



class Map extends Component {
  
  mapHandler = (event) => {
    let stateName = event.target.dataset.name;

    
    console.log(stateName);
   
    window.location.href = '/update/' + (stateName);
  //   <Modal.Header closeButton>
  //   <Modal.Title>{stateName}</Modal.Title>
  // </Modal.Header>
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
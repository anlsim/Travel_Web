import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import USAMap from "react-usa-map";
import './App.css';

class App extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
 
  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/" component={HomePage} exact/>
        <USAMap onClick={this.mapHandler} />
        
      </div>
      </Router>
      
    );
  }

}

export default App;

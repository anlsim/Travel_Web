import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import USAMap from "react-usa-map";
import './App.css';
import AboutPage from './pages/HomePage';
import UpdatesList from './pages/UpdatesList';
import UpdatePage from './pages/UpdatePage';


class App extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
 
  render() {
    return (
      <Router>
        <div className="App">
          <div>
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage} />
        <Route path="/updates-list" component={UpdatesList} />
        <Route path="/update" component={UpdatePage} />
        <USAMap onClick={this.mapHandler} />
        </div>
      </div>
      </Router>
      
    );
  }

}

export default App;

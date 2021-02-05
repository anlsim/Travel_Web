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
import NavBar from './NavBar';


class App extends Component {
  //@TODO - Find a better way to display the map
  // mapHandler = (event) => {
  //   alert(event.target.dataset.name);
       //<USAMap onClick={this.mapHandler} />
  // };
 
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div>
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage} />
        <Route path="/updates-list" component={UpdatesList} />
        <Route path="/update/:stateName" component={UpdatePage} />
   
        </div>
      </div>
      </Router>
      
    );
  }

}

export default App;

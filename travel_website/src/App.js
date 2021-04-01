import React, {Component} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from './pages/AboutPage/AboutPage';
import BlogPage from './pages/BlogPage/BlogPage';
import UpdatePage from './components/UpdateEntry/UpdateEntry';
import NavBar from './components/NavBar/NavBar';
import NotFoundPage from './pages/ErrorsPage/NotFoundPage';
import GalleryPage from './pages/GalleryPage/Gallery';
import MapPage from './pages/MapPage/MapPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/about" component={AboutPage} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/gallery" component={GalleryPage} />
                <Route path="/update/:stateName" component={UpdatePage} />
                <Route path="/map" component={MapPage} />
                <Route component={NotFoundPage} />
            </Switch>
        
        </div>
      </div>
      </Router>
      
    );
  }

}

export default App;

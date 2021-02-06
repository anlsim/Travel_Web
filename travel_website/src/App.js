import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import AboutPage from './pages/HomePage';
import UpdatesListPage from './pages/UpdatesListPage';
import UpdatePage from './pages/UpdatePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

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
                <Route path="/updates-list" component={UpdatesListPage} />
                <Route path="/update/:stateName" component={UpdatePage} />
                <Route component={NotFoundPage} />
            </Switch>
        
        </div>
      </div>
      </Router>
      
    );
  }

}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
//import Button from 'react-bootstrap/Button';
import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';
import Favorites from './pages/favorites';
import Register from './pages/register';



function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <header className="nav-bar">

        {/* Links */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
         
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </header>

      {/* Route Paths */}
      <Switch>
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } /> 
        <Route exact path="/home" component={ Home } />
      </Switch>

    </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  username: state.userReducer.username,
});

export default connect(mapStateToProps)(App);

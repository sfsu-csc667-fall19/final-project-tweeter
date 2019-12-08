import React from 'react';
import { connect } from 'react-redux';
import Login from './pages/login';
import Register from './pages/register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

import { Home } from './pages/home';
import { Favorites } from './pages/favorites';
import { Logout } from './pages/logout';
import { Profile } from './pages/profile';

import Logo from './components/Logo';
import Sidebar from './components/Sidebar';



function App() {
  return (

    <React.Fragment>
      <Router>
        <NavigationBar />
        <Logo />
        <Sidebar />




        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/logout" component={Logout} />

        </Switch>
      </Router>
    </React.Fragment>
    
  );
}

const mapStateToProps = state => ({
  username: state.userReducer.username,
});

export default connect(mapStateToProps)(App);
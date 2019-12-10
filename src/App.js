import React from 'react';
import { connect } from 'react-redux';
import Login from './pages/login';
import Register from './pages/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

import { Home } from './pages/home';
import { Favorites } from './pages/favorites';
import { Logout } from './pages/logout';
import { Profile } from './pages/profile';
import Splash from './pages/splash';
import axios from 'axios';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';


const App = ({ isLoggedIn }) => {

   const onLogout = () =>{
    
    axios.post('/logoutData', function(req , res){
      req.Logout();

      if(req.xhr){
        return res.status(204).end();
      }
      return res.redirect('/');
    })
  }

  return (

    <React.Fragment>
      <Router>
        
        {/* Checks whether user is logged in to display needed components */}
        {isLoggedIn && (
          <div>
          <NavigationBar />
          <Logo />
          <Sidebar />
          </div>
        )}
        {!isLoggedIn && (
          <Splash />
        )}

        {/* Can only access after logged in */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          {!isLoggedIn && (
          <Route path="/splash" component={Splash} />
          )}
          <Route exact path="/" />
        </Switch>

      </Router>
    </React.Fragment>
    
  );
}

const mapStateToProps = state => ({
  username: state.userReducer.username,
});

export default connect(mapStateToProps)(App);
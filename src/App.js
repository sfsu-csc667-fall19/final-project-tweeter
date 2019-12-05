import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import Login from './pages/login';



const App = ({ username }) => {
  return (
    <div className="App">
      <div className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand"  to="/">Home</Link>
        <div className="collapse navbar-collapse"> 
          <ul className="navbar-nav mr-auto">
            {username === 'guest' && (
              <li className="nav-item active">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
            {username === 'guest' && (
              <li className="nav-item active">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            )}
            {username !== 'guest' && (
              <li className="nav-item active">
                <Link className="nav-link" to="/notes">Notes</Link>
              </li>
            )}
          </ul>
        </div>
      </div>      
      <Switch>
        
        <Route path="/login" component={Login} />
        
  
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.userReducer.username,
});

export default connect(mapStateToProps)(App);

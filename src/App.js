import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Login from './pages/login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Tweeter.
        </p>
       

      </header>
      <div>
      <Button variant= "primary" size = "lg" onClick={Login}>login</Button>
      <Button variant = "primary" size="lg">Register</Button>

      </div>
      <Switch>
        <Route path = "/register" component/>
        <Route path="/login" component={Login}/>
        <Route path="/feed" component/>
      </Switch>
    </div>
  );
}

export default App;

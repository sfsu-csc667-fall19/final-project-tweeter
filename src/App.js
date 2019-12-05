import React from 'react';
import {Router, Switch, PrivateRoute, Route } from 'react-router-dom';
import Redirect from 'react';
import Login from './pages/login';
import Register from './pages/register';

class App extends React.Component {
  constructor(props) {
      super(props);

      // history.listen((location, action) => {
      //     // clear alert on location change
      //     this.props.clearAlerts();
      // });
  }

  render() {
      const { alert } = this.props;
      return (
          <div className="jumbotron">
              <div className="container">
                  <div className="col-sm-8 col-sm-offset-2">
                      {alert.message &&
                          <div className={`alert ${alert.type}`}>{alert.message}</div>
                      }
                      <Router >
                          <Switch>
                              <PrivateRoute exact path="/" />
                              <Route path="/login" component={Login} />
                              <Route path="/register" component={Register} />
                              <Redirect from="*" to="/" />
                          </Switch>
                      </Router>
                  </div>
              </div>
          </div>
      );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };

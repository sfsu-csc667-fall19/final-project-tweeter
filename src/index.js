import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // THIS IS NEW!!

import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {addTweet} from "./redux/actions/tweetActions";

const ws = new WebSocket("ws://localhost:6001");
ws.onopen = () => {
    // alert("Successfully connected to websocket server!");
};

const store = createStore(rootReducer, applyMiddleware(thunk)); // MUST APPLY THUNK MIDDLEWARE!!

// We've received a message from the server, let's do something with it!
ws.onmessage = (evt) => {
    let data = JSON.parse(evt.data);

    // Check what we need to do with this message
    if (data.type === "NEW_TWEET") {
        console.log(data.content);
        let subdata = data.content;
        let newTweet = `<li>${subdata.username}: ${subdata.text}</li>`;
        store.dispatch(addTweet(newTweet));
    }
};

// TODO: change this
window.ws = ws;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
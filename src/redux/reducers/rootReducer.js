import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import userReducer from './userReducer';
import tweetReducer from "./tweetReducer";

export default combineReducers({
  messageReducer,
  userReducer,
  tweetReducer
});
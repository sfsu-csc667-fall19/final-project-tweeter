import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';
import axios from 'axios';
import './splash.css';
import Image  from '../Logo.png';
//import md5 from 'md5';

const options = {
    withCredentials: true
  };

const Splash = ({ dispatch, isLoggedIn }) => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

    React.useEffect(() => {
      const body = {
        username: '',
        password: '',
      };
      axios.post('/service2/', body, options)
          .then((res) => {
            console.log(res)
          })
          .catch(console.log);
      }, []); // VERY IMPORTANT NEEDS THE EMPTY ARRAY
    
    
    const verify = () => {
      const body = {
        username,
        password: password,
      };
      axios.post('/service2/login', body, options)
        .then((res) => {
          if (res.data.valid) {
            document.cookie = `username=${username}`; //set cookies with key/value pairs
            document.cookie = `password=${password}`; //set cookies with key/value pairs
            dispatch(loginUser(true));
          } else {
            document.cookie = "username=";
            document.cookie = "password=";
          }
          console.log(res)
        })
        .catch(console.log);
      };

    const updateEmail = (newEmail) => {
        if (newEmail.length < 20) {
          setUsername(newEmail);
        }
      };

    const updatePassword = (newPassword) => {
        if (newPassword.length < 15) {
            setPassword(newPassword);
        }
      };

    if (isLoggedIn) {
        return <Redirect to="/" />;
      }

    return (
        <div>
            <div className='logo-wrapper'>
                <img className='logo' src={Image} alt='tweeter logo' />
            </div>
            <div className='nav'>
                    <ul>
                        <li>
                        <input placeholder='Username'
                            value={username}
                            onChange={e => updateEmail(e.target.value)}
                        />
                        </li>
                        <li>
                        <input placeholder='Password'
                            type="password"
                            value={password}
                            onChange={e => updatePassword(e.target.value)}
                        />
                        <p>Forgot Password?</p>
                        </li>
                        <li>
                        <button onClick={verify}>Log in</button>
                        </li>
                     </ul>
                </div>
                <div className='body'>
                    <h2>Tweeter</h2>
                </div>
            </div>
      );
  };

const mapStateToProps = state => ({
    loginUser: state.userReducer.loginUser,
});

export default connect(mapStateToProps)(Splash);


import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setIsLoggedIn, loginUser } from '../redux/actions/userActions';
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
  const [toggle, setToggle] = React.useState(false);

    React.useEffect(() => {
      const body = {
        username: '',
        password: '',
      };
      axios.post('/profile/', body, options)
          .then((res) => {
            console.log(res)
          })
          .catch(console.log);
      }, []); // VERY IMPORTANT NEEDS THE EMPTY ARRAY
    
    // Post section for storing user input into MongoDB
    const verify = () => {
      const body = {
        username,
        password: password,
      };
      axios.post('/profile/login', body, options)
        .then((res) => {
          if (res.data.valid) {
            document.cookie = `username=${username}`; //set cookies with key/value pairs
            document.cookie = `password=${password}`; //set cookies with key/value pairs
            dispatch(isLoggedIn(true));
          } else {
            document.cookie = "username=";
            document.cookie = "password=";
          }
          console.log(res)
        })
        .catch(console.log);
      };

    // updates username state
    const updateEmail = (newEmail) => {
        if (newEmail.length < 20) {
          setUsername(newEmail);
          dispatch(loginUser(username));
        }
      };

    const updatePassword = (newPassword) => {
        if (newPassword.length < 15) {
            setPassword(newPassword);
        }
      };

      const check = () => {
        dispatch(setIsLoggedIn(true));
      };

      const signup = () => {
        setToggle(true);
      };

      if (toggle) {
        return <Redirect to="/register" />;
      }

      if (isLoggedIn) {
        return <Redirect to="/home" />;
      }

    return (
        <div>
            {/* Side logo of splash page */}
            <div className='logo-wrapper'>
                <img className='logo' src={Image} alt='tweeter logo' />
            </div>

            {/* Top login of splash page */}
            <div className='nav'>
                <ul>
                    <li>
                    <label className="sr-only">Username</label>
                    <input 
                        placeholder='Username'
                        type="text"
                        value={username}
                        onChange={e => updateEmail(e.target.value)}
                    />
                    </li>
                    <li>
                    <label className="sr-only">Password</label>
                    <input 
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={e => updatePassword(e.target.value)}
                    />
                        <p>Forgot Password?</p>
                    </li>
                    <li>
                        {/* Login button */}
                        <button className="buttonFirst" onClick={verify}>Log in</button>
                    </li>
                    </ul>
                </div>

                {/* Body of Splash page */}
                <div className='body'>
                    <h2>Tweeter</h2>
                    <p className='join'>Join Tweeter today.</p>
                    <div className="SignupLogin">
                        <ul>
                            <li>
                              {/* Signup button */}
                            <button className="buttonSecond" onClick={signup}>Sign up</button>
                            </li>
                            <li>
                            <button className="buttonThird" onClick={check}>Log in</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      );
  };

const mapStateToProps = state => ({
    loginUser: state.userReducer.loginUser,
    isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps)(Splash);


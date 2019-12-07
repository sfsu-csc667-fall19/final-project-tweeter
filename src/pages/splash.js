import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';
import axios from 'axios';
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
            <h1>Login</h1>
            <div>
                <p>Username</p>
                <input
                    value={username}
                    onChange={e => updateEmail(e.target.value)}
                />
            </div>
            <div>
                <p>Password</p>
                <input
                    type="password"
                    value={password}
                    onChange={e => updatePassword(e.target.value)}
                />
            </div>
            <div>
                <button onClick={verify}>submit</button>
            </div>
        </div>
      );
  };

const mapStateToProps = state => ({
    loginUser: state.userReducer.loginUser,
});

export default connect(mapStateToProps)(Splash);


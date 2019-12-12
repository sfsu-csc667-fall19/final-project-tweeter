import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';
import { NavigationBar } from '../components/NavigationBar';
import './register.css';
import Image  from '../Logo.png';


const Wrapper = styled.div`
  display: block;
  margin-top: 1em;
  margin-left: 300px;
`;


const Register = () => {

  const [toggle, setToggle] = React.useState(false);
  const [first_name, setFirstName] = React.useState('');
  const [last_name, setLastName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  
  const submitForm = ({ dispatch, isLoggedIn }) => {
    // console.log(this.state.form.username);
    // console.log(md5(this.state.form.password));

    const body = {
      username: username, 
      password: password,
      last_name: last_name,
      first_name: first_name,
    };

    axios.post('/auth/register', body)
      .then((res) => {
        console.log(res);
        if (res.data.status === 'success') {
          dispatch(isLoggedIn(true));
        } else {
          console.log("Error registering!");
        }
      })
      .catch(console.log);
  };

  const check = () => {
    setToggle(true);
  };

  if (toggle) {
    return <Redirect to="/splash" />;
  }

    return (
      <div>
        {/* Side logo of splash page */}
        <div className='logo-wrapper'>
              <img className='logo' src={Image} alt='tweeter logo' />
          </div>
       <Wrapper>
        <NavigationBar />
        <div className="body-wrapper">
        <div className="form-signin">
          <h1 className="sign">Register</h1>
          <label className="sr-name">First Name</label>
          <input onChange={e => setFirstName(e.target.value) }
                  value={first_name} 
                  type="text" 
                  className="form-control" 
                  placeholder=""/>
                  <div className="space"></div>
          <label>Last Name</label>
          <input onChange={e => setLastName(e.target.value) } 
                  value={last_name} 
                  type="text" 
                  className="form-control" 
                  placeholder=""/>
                  <div className="space"></div>
          <label>Username</label>
          <label className="sr-only">Username</label>
          <input onChange={e => setUsername(e.target.value) }
                  value={username} 
                  type="text" 
                  className="form-control" 
                  placeholder=""/>
                  <div className="space"></div>
           <label>Password</label>
          <label className="sr-only">Password</label>
          <input onChange={e => setPassword(e.target.value) }
                  value={password} 
                  type="password" 
                  className="form-control" 
                  placeholder="" />
                  <div className="space"></div>
          <button onClick={submitForm} className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
          <button onClick={check} className="btn btn-lg btn-primary btn-block" type="submit">Cancel</button>
        </div>
        </div>
        </Wrapper>
      </div>
    );
  }

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(Register);


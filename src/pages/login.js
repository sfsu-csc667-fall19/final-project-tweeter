import React from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import axios from 'axios';
//import md5 from 'md5';


class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          form: {
            username: '',
            password: ''
          }
        }
      }

    // render the login form after clicking log in
    
    render() {
        return (

            <div>
                <div>
                    <h1>Login</h1>
                    
                    <label>Username</label>
                    <input hintText="Enter your username"
                    floatingLabelText="Username">

                    </input>
                    <label>Password</label>
                    <input></input>
                </div>
        </div>
      
    );
  }






}   

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Login);
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';
import { NavigationBar } from '../components/NavigationBar';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: '',
        password: ''
      }
    }
  }
  
  submitForm = () => {
    console.log(this.state.form.username);
    console.log(this.state.form.password);

    const body = {
      username: this.state.form.username, 
      password: this.state.form.password,
    };

    axios.post('/auth/login', body)
      .then((res) => {
        //adding cookies  
        document.cookie = 'username=username';
        document.cookie = 'password=password';
        console.log('This is ')

        if (res.data.status === 'success') {
          //this.props.dispatch(res.datanpm)
          document.cookie = `username=${this.state.form.username}`; //set cookies with key/value pairs
          document.cookie = `password=${this.state.formpassword}`; //set cookies with key/value pairs
        } else {
          console.log("Error login!");
        }
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <Logo />
        <Sidebar />
        <div className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Welcome to Tweeter</h1>
          <h3 className = "h5 mb-5 font-weight-normal"> Please Login</h3>
          <label className="sr-only">Username</label>
          <input onChange={e => this.setState({ form: { ...this.state.form, username: e.target.value } })} 
                  value={this.state.form.username} 
                  type="text" 
                  className="form-control" 
                  placeholder="Username"/>
          <label className="sr-only">Password</label>
          <input onChange={e => this.setState({ form: { ...this.state.form, password: e.target.value } })} 
                  value={this.state.form.password} 
                  type="password" 
                  className="form-control" 
                  placeholder="Password" />
          <button onClick={() => this.submitForm()} className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(Login);
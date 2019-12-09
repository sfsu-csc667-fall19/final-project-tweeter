import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Sidebar from '../components/Sidebar';
import { NavigationBar } from '../components/NavigationBar';


const Wrapper = styled.div`
  display: block;
  margin-top: 1em;
  margin-left: 300px;
`;


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstname:'',
        lastname:'',
        email:'',
        username: '',
        password: ''
      }
    }
  }
  
  submitForm = () => {
    // console.log(this.state.form.username);
    // console.log(md5(this.state.form.password));

    const body = {
      username: this.state.form.username, 
      password: this.state.form.password
    };

    axios.post('/register', body)
      .then((res) => {
        if (res.data.status === 'success') {
          
        } else {
          console.log("Error registering!");
        }
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
       <Wrapper>
        <NavigationBar />
        <Logo />
        <Sidebar />
        <h2>Register: </h2>
        </Wrapper>
        <div className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal ">Register</h1>
          <label className="sr-name">First Name</label>
          <input onChange={e => this.setState({ form: { ...this.state.form, username: e.target.value } })} 
                  value={this.state.form.firstname} 
                  type="text" 
                  className="form-control" 
                  placeholder="firstname"/>
          <label>LastName</label>
          <input onChange={e => this.setState({ form: { ...this.state.form, username: e.target.value } })} 
                  value={this.state.form.lastname} 
                  type="text" 
                  className="form-control" 
                  placeholder="lastname"/>
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
          <button  className="btn btn-lg btn-primary btn-block" type="submit">Cancel</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(Register);


import React from 'react';
import axios from 'axios';





export default class ShowProfile extends React.Component {
    constructor(props) {
      super(props);
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleUserNameChange = this.handleUserNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);

      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      //this.updateProfile = this.updateProfile.bind(this);
      this.getProfile = this.getProfile.bind(this);
      this.state = {
        firstname:'',
        lastname:'',
        email:'',
        username: '',
        password: ''
      };
      
    }
   // componentDidMount(){
   //   document.getElementById('addHyperLink').className = "";
   //   document.getElementById('homeHyperlink').className = "";
   //   document.getElementById('profileHyperlink').className = "active";
   //   this.getProfile();
   // }
    updateProfile(){
    }

    handleFirstNameChange(e){
      this.setState({firstname:e.target.value})
    }
    handleLastNameChange(e){
      this.setState({lastname:e.target.value})
    }
    handleUserNameChange(e){
      this.setState({username:e.target.value})
    }
    handleEmailChange(e){
      this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
      this.setState({password:e.target.value})
    }

    getProfile(){
      var self = this;
      axios.post('/getProfile', {
      })
      .then(function (response) {
        if(response){
          self.setState({firstname:response.data.firstname});
          self.setState({lastname:response.data.lastname});
          self.setState({username:response.data.username});
          self.setState({email:response.data.email});
          self.setState({password:response.data.password});  
        }
      })
      .catch(function (error) {
        console.log('error is ',error);
      });
    }
    
    render() {
      return (
        <div className="col-md-5">
          <div className="form-area">  
              <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                <h3>Your username is: {this.state.username}</h3>
                </div>
                
                <div className="form-group">
                  <input value={this.state.firstname} type="text" onChange={this.handleFirstNameChange} className="form-control" placeholder="First Name" required />
                </div>
                <div className="form-group">
                  <input value={this.state.lastname} type="text" onChange={this.handleLastNameChange} className="form-control" placeholder="Last Name" required />
                </div>
                <div className="form-group">
                  <input value={this.state.username} type="text" onChange={this.handleUserNameChange} className="form-control" placeholder="User Name" required />
                </div>
                <div className="form-group">
                  <input value={this.state.email} type="text" onChange={this.handleEmailChange} className="form-control" placeholder="Email Address" required />
                </div>
               
                <div className="form-group">
                  <input value={this.state.password} type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required />
                </div>
               
                <button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn btn-primary pull-right">Update</button>
              </form>
          </div>
        </div>
      )
    }
}


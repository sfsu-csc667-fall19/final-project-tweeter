/*
import React from 'react';
import axios from 'axios';



export default class ProfileList extends React.Component {
    state = {
        profiles: []
    }

    


    componentDidMount() {
        axios.post('/auth/register')
            .then(res => {
                console.log(res);
                this.setState({ profiles: res.data });
            });
    }

    render() {
        return (
            <div>
                
                 
                <ul>
                    {this.state.profiles.map(user => (
                        
                        <li key={user.id}>{user.name}<br/>{user.username}</li>))}
                </ul>
                
            </div>

        )
    }
}
*/




import React from "react";

export default class ProfileList extends React.Component {
    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false});
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.person) {
            return <div>didnt get a person</div>;
        }

        return (
            <div>
                <img src={this.state.person.picture.large} />
                <div>First Name: {this.state.person.name.first}</div>
                <div>Last Name: {this.state.person.name.last}</div>
                <div>User Name: {this.state.person.login.username}</div>


                
            </div>
        );
    }
}

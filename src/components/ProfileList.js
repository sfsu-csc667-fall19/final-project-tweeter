import React from 'react';
import axios from 'axios';


export default class ProfileList extends React.Component {
    state = {
        profiles: []
    }

    componentDidMount() {
        axios.get('/profile/register')
            .then(res => {
                console.log(res);
                this.setState({ profiles: res.data});
            });
    }

    render() {
        return ( 
            <div>
            <ul>
                {this.state.profiles.map(firstname => (
                <li key={firstname.id}>{firstname.name}</li>))}
            </ul>
            <ul>
                {this.state.profiles.map(username => (
                    <li>{username.username}</li>
                ))}
            </ul>
            </div>
            
        )
    }
}
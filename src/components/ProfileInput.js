import React from 'react';
import axios from 'axios';


export default class ProfileInput extends React.Component {
    state = {
        name: '',
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
        }

        axios.post('/profile/register', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);

            })
            .catch(console.log);

    }


    render() {
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        )
    }
}
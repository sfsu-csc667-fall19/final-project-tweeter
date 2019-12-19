import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import axios from 'axios';
import { connect } from 'react-redux';

const WriteTweet = ({username}) => {

    const [text, setText] = React.useState('');

    const addTweet = () => {
        axios.post(`http://localhost:3005/new_tweet`, {
            text,
            username
        })
        .then((res) => {
          console.log(res);
        })
        .catch(console.log);
    };

    return(
        <div className='home'>
            <div className='tweets'>
                <p>{username}</p>
                <InputGroup>
                    <FormControl inputRef={ref => { this.myInput = ref; }} as="textarea" placeholder="Write what's on your mind" value={text} onChange={e=> setText(e.target.value)} aria-label="With textarea" />
                    <InputGroup.Prepend>
                    <Button variant="success" onClick={addTweet}>
                        Submit
                    </Button>
                    </InputGroup.Prepend>
                </InputGroup>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username,
    };
};

export default connect(mapStateToProps)(WriteTweet);
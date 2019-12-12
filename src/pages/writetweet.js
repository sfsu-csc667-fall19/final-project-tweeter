import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import axios from 'axios';

const WriteTweet = () => {

    const [text, setText] = React.useState('');

    const addTweet = () => {
        axios.post(`http://18.224.179.182:3005/new_tweet`, {
          text
        })
        .then((res) => {
          console.log(res);
        })
        .catch(console.log);
    };

    return(
        <div className='home'>
            <div className='tweets'>
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
export default WriteTweet;
import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const WriteTweet = () => {

    const [text, setText] = React.useState('');

    const addTweet = () => {
        
    };

    return(
        <div className='home'>
            <div className='tweets'>
                <InputGroup>
                    <FormControl as="textarea" placeholder="Write what's on your mind" value={text} onChange={e=> setText(e.target.value)} aria-label="With textarea" />
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
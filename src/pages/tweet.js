import React from 'react';

const Tweet = (props) => {
    var tweet = props.tweet;
    return(
        <li>
            {tweet.message}
        </li>
    )
}
export default Tweet;
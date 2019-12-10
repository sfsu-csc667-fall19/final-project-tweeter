import React from 'react';

const Tweet = (props) => {
    var tweet = props.tweet;
    return(
        <li className={"tweet" + (tweet.active ? ' active' : '')}>
            <blockquote>
            <cite>
                <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a> 
                <span className="screen-name">@{tweet.screenname}</span> 
            </cite>
            <span className="content">{tweet.body}</span>
            </blockquote>
        </li>
    )

}
export default Tweet;
import React from 'react';
import Tweet from './tweet';

const Tweets = (props) => {
    // Build list items of single tweet components using map
    var content = props.tweets.map(function(tweet){
        return (
          <Tweet key={tweet._id} tweet={tweet} />
        )
    });
    
    return(
        <ul className="tweets">{content}</ul>
    )

}
export default Tweets;
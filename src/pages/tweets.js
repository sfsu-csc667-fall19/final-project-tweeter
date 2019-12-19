import React from 'react';
import { connect } from 'react-redux';

const Tweets = ({tweets}) => {

    // Build list items of single tweet components using map
    return (
        <ul className="tweets">{tweets}</ul>
    );
};

const mapStateToProps = (state) => {
    return {
        tweets: state.tweetReducer.tweets
    };
};

export default connect(mapStateToProps)(Tweets);
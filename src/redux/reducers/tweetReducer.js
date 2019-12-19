const initialState = {
    tweets: []
};

const tweetReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TWEET":
            return {
                ...state,
                tweets: state.tweets + action.tweet
            };
        default:
            return state;
    }
};

export default tweetReducer;
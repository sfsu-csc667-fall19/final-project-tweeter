const DEFAULT_STATE = {
    messages: []
  };
  
  const messageReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case 'MESSAGES_SET_MESSAGES':
        return Object.assign({}, state, {
          messages: [...action.messages], 
        });
  
      default:
        return state;
    }
  };
  
  export default messageReducer;
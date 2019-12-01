const DEFAULT_STATE = {
    username: 'guest'
  };
  
  const userReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case 'USER_LOGGED_IN':
        return {
          username: action.username
        }
      case 'USER_LOGGED_OUT':
        return DEFAULT_STATE;
      default:
        return state;
    }
  };
  
  export default userReducer;
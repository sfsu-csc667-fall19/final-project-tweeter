const DEFAULT_STATE = {
    username: 'guest',
    isLoggedIn: false,
  };
  
  const userReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case 'USER_LOGGED_IN':
        return {
          ...state,
          username: action.username
        }
      case 'SET_IS_LOGGED_IN':
        return {
          ...state,
          isLoggedIn: action.isLoggedIn,
        }
      case 'USER_LOGGED_OUT':
        return DEFAULT_STATE;
      default:
        return state;
    }
  };
  
  export default userReducer;
export const loginUser = (username) => ({
    type: 'USER_LOGGED_IN',
    username,
  })
  
  export const logoutUser = () => ({
    type: 'USER_LOGGED_OUT',
  })
export const loginUser = (username) => ({
    type: 'USER_LOGGED_IN',
    username,
});
 
export const setIsLoggedIn = isLoggedIn => ({
    type: 'SET_IS_LOGGED_IN',
    isLoggedIn,
});

export const logoutUser = () => ({
  type: 'USER_LOGGED_OUT',
)};

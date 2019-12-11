export const loginUser = (username) => ({
    type: 'USER_LOGGED_IN',
    username,
});

export const setIsLoggedIn = isLoggedIn => ({
    type: 'SET_IS_LOGGED_IN',
    isLoggedIn,
});


export const logOutUser = () => ({
  type: 'USER_LOGGED_OUT',
});

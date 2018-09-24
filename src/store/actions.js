export const SET_USER = 'set new user';
export const UPDATE_USER = 'update existing user';
export const REMOVE_USER = 'remove user';
export const setUser = (data) => ({ type: SET_USER , data});
export const updateUser = (data) => ({ type: UPDATE_USER , data});
export const removeUser = () => ({ type: REMOVE_USER });


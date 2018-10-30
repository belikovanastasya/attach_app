export const SET_USER = 'set new user';
export const UPDATE_USER = 'update existing user';
export const REMOVE_USER = 'remove user';
export const CREATE_USER = 'create user';
export const GET_ERRORS = 'get errors from server';
export const SET_CURRENT_USER = 'set current user';

export const setUser = (data) => ({ type: SET_USER , data});
export const updateUser = (data) => ({ type: UPDATE_USER , data});
export const removeUser = () => ({ type: REMOVE_USER });
export const createUser = (data) => ({ type: CREATE_USER, data });
export const setCurrentUser = (decoded) => ({ type: SET_CURRENT_USER, payload: decoded });

export const getErrors = (data) => ({type: GET_ERRORS, data})


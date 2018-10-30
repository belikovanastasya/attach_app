import { SET_USER, UPDATE_USER, REMOVE_USER, CREATE_USER, GET_ERRORS, SET_CURRENT_USER } from './actions';
import isEmpty from '../servises/isEmpty';


export const user = (state = null, {type, data}) => {
    switch(type) {
        case UPDATE_USER:
        case SET_USER:
        case CREATE_USER:
            {
            return data;
        }

        case REMOVE_USER: {
            return null;
        }
        case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated: !isEmpty(data.payload),
            user: data.payload
        }
    }
    return state;
}

export const errors = (state = null, {type, data}) => {
    switch(type) {
        case GET_ERRORS: {
            return data;
        }
    }
    return state;
}
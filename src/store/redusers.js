import { SET_USER, UPDATE_USER, REMOVE_USER, CREATE_USER } from './actions';


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
    }
    return state;
}
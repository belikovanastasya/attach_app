import { SET_USER, UPDATE_USER, REMOVE_USER } from './actions';


export const user = (state = null, {type, data}) => {
    switch(type) {
        case UPDATE_USER:
        case SET_USER: {
            return data;
        }

        case REMOVE_USER: {
            return null;
        }
    }
    return state;
}
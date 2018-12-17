import { SET_USER, UPDATE_USER, REMOVE_USER, CREATE_USER, GET_ERRORS } from './actions';


export const user = (state = null, { type, data }) => {
  switch (type) {
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
};

export const errors = (state = null, { type, data }) => {
  switch (type) {
    case GET_ERRORS: {
      console.log(data)
      return data;
    }
  }
  return state;
};

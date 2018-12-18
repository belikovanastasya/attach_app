import { SET_USER, UPDATE_USER, REMOVE_USER, CREATE_USER, GET_ERRORS, ADD_FLASH_MESSAGES, DELETE_FLASH_MESSAGES } from './actions';
import shortid from 'shortid';
import findIndex from 'lodash';


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

export const flashMessages = (state = [], { type, message, id }) => {
  switch (type) {
    case ADD_FLASH_MESSAGES:
      {
        return [
          ...state,
          {
            id: shortid.generate(),
            isSuccess: message.isSuccess,
            text: message.text
          }
        ]
      }
    case DELETE_FLASH_MESSAGES:
      {
        const index = _.findIndex(state, { id: id });
        if (index >= 0) {
          return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
          ]
        }
        return state;
      }
  }
  return state;
}
// export const errors = (state = null, { type, data }) => {
//   switch (type) {
//     case GET_ERRORS: {
//       console.log(data)
//       return data;
//     }
//   }
//   return state;
// };

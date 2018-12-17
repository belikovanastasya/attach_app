import { SET_USER, UPDATE_USER, REMOVE_USER, CREATE_USER, GET_ERRORS, ADD_FLASH_MESSAGES } from './actions';
import shortid from 'shortid'


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

export const flashMessages = (state = [], {type, message}) => {
  console.log(message)
  switch (type) {
    case ADD_FLASH_MESSAGES:
    {
      return [
        ...state,
        {
          id: shortid.generate(),
          type: message.type,
          text: message.text
        }
      ]
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

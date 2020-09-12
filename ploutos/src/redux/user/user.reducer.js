import { userActionTypes } from './user.types';

const INITIAL_STATE = {
  id: null,
  firstName: '',
  lastName: '',
  isLoggedIn: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isLoggedIn: true
      }
    default:
      return state;
  }
}

export default userReducer;
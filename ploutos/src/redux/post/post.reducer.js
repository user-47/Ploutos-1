import { postActionTypes } from './post.types';


const INITIAL_STATE = {
  buyingCurrency: 'NGN',
  selling: null,
  sellingCurrency: 'CAD',
  rate: 290,
}

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postActionTypes.NEW_POST:
      return {
        ...state,
      }
      break;
  
    default:
      return state;
      break;
  }
};

export default postReducer;

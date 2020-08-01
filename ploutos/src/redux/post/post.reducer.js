import { postActionTypes } from './post.types';
import { createNewPost } from './post.utils';


const INITIAL_STATE = {
  isFavorite: false,
  postDetailsCollection: [],
  // buyingCurrency: 'NGN',
  // selling: null,
  // sellingCurrency: 'CAD',
  // rate: 290,
}

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postActionTypes.NEW_POST:
      return {
        ...state,
        postDetailsCollection: createNewPost(state.postDetailsCollection, action.payload)
      }
      break;
  
    default:
      return state;
      break;
  }
};

export default postReducer;

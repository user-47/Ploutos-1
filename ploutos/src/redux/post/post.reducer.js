import { postActionTypes } from './post.types';
import { createNewPost, deletePost } from './post.utils';


const INITIAL_STATE = {
  isFavorite: false,
  postDetailsCollection: [],
}

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postActionTypes.NEW_POST:
      return {
        ...state,
        postDetailsCollection: createNewPost(state.postDetailsCollection, action.payload)
      }
    case postActionTypes.DELETE_POST:
      return {
        ...state,
        postDetailsCollection: deletePost(state.postDetailsCollection, action.payload)
      }
    default:
      return state;
  }
};

export default postReducer;

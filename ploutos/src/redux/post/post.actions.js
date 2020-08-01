import { postActionTypes } from './post.types';

export const createNewPost = postDetails => ({
  type: postActionTypes.NEW_POST,
  payload: postDetails
});
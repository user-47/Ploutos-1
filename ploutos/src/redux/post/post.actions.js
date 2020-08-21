import { postActionTypes } from './post.types';

export const createNewPost = postDetails => ({
  type: postActionTypes.NEW_POST,
  payload: postDetails
});

export const deletePost = postDetails => ({
  type: postActionTypes.DELETE_POST,
  payload: postDetails
});
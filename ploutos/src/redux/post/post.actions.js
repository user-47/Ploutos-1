import { postActionTypes } from './post.types';

export const newPost = post => ({
  type: postActionTypes.NEW_POST,
  payload: post
});
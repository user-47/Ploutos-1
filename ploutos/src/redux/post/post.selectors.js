import { createSelector } from 'reselect';

const selectPost = state => state.post;

export const selectPostDetails = createSelector(
  [selectPost],
  post => post.postDetailsCollection
);
// import { postActionTypes } from "./post.types"

export const createNewPost = (postArray, postDetailsToAdd) => {
  const lengthToGenerateId = postArray.length + 1;
  return [ ...postArray, { ...postDetailsToAdd, id: lengthToGenerateId }]
};

export const deletePost = (postArray, postDetailsToDelete) => {
  // const getPostToBeDeleted = postArray.find(
  //   post => post.id === postDetailsToDelete.id
  // );

  return postArray.filter(post => post.id !== postDetailsToDelete.id)
};
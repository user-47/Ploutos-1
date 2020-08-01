import { postActionTypes } from "./post.types"

export const createNewPost = (postArray, postDetailsToAdd) => {
  const lengthToGenerateId = postArray.length == 0 ? postArray.length : postArray.length - 1;
  return [ ...postArray, { ...postDetailsToAdd, id: lengthToGenerateId + 1 }]
};
import { ActionTypes } from './types';
import { Dispatch } from 'redux';

export interface Post {
  author: string;
  body: string;
}
export interface PostAction {
  type: ActionTypes.CreatePost;
  payload: Post;
}

export const createPost = (post: Post) => {
  return (dispatch: Dispatch) => {
    dispatch<PostAction>({
      type: ActionTypes.CreatePost,
      payload: post,
    });
  };
};

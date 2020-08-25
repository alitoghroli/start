import { Post, PostAction, ActionTypes } from '../actions';

export const postReducer = (state: Post[] = [], action: PostAction) => {
  switch (action.type) {
    case ActionTypes.CreatePost: {
      const ob = action.payload;
      state.push(ob);
      return state;
    }

    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import { postReducer } from './postReducer';
import { Post } from '../actions';

export interface StoreState {
  post: Post[];
}

export const reducers = combineReducers<StoreState>({
  post: postReducer,
});

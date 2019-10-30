  
import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter, LocationChangeAction, RouterState } from 'connected-react-router';
import storiesReducer from './StoriesReducer';
import commentsReducer from './CommentsReducer';
import IStories from '../models/Stories';
import IComments from '../models/Comments';

export interface IRootState extends Reducer {
  readonly router: Reducer<RouterState, LocationChangeAction>;
  readonly stories: IStories;
  readonly comments: IComments;
}

const rootReducer = (history: History): Reducer => combineReducers({
  router: connectRouter(history),
  stories: storiesReducer,
  comments: commentsReducer,
});

export default rootReducer;

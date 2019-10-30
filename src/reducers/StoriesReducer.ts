import { combineReducers } from 'redux';
import storiesIdsReducer from './StoriesIdsReducer';
import storiesDetailsReducer from './StoriesDetailsReducer';

export default combineReducers({
  storiesIds: storiesIdsReducer,
  storiesDetails: storiesDetailsReducer,
});

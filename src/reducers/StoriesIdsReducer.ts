import IStoriesIdsAction from './IStoriesIdsAction';
import IStoriesIds from '../models/StoriesIds';
import { GET_STORIES_IDS, DELETE_STORIES_IDS } from '../actionTypes/StoriesActionTypes';

const initialState: IStoriesIds = []; 

export default (state = initialState, action: IStoriesIdsAction) => {

    switch (action.type) {

        case GET_STORIES_IDS:
            return action.data;

        case DELETE_STORIES_IDS:
            return action.data;

        default:
            return state;
    }

};

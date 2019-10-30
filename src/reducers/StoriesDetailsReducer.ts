import IStoriesDetailsAction from './IStoriesDetailsAction';
import IStoriesDetails from '../models/StoriesDetails';
import { GET_STORIES_DETAILS, DELETE_STORIES_DETAILS } from '../actionTypes/StoriesActionTypes';

const initialState: IStoriesDetails = []; 

export default (state = initialState, action: IStoriesDetailsAction) => {

    switch (action.type) {

        case GET_STORIES_DETAILS:
            return action.data;

        case DELETE_STORIES_DETAILS:
                return action.data;

        default:
            return state;
    }

};

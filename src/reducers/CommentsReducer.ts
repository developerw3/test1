import ICommentsAction from './ICommentsAction';
import IComments from '../models/Comments';
import { GET_STORY_COMMENTS, DELETE_STORY_COMMENTS } from '../actionTypes/CommentsActionTypes';

const initialState: IComments = []; 

export default (state = initialState, action: ICommentsAction) => {

    switch (action.type) {

        case GET_STORY_COMMENTS:
            return action.data;

        case DELETE_STORY_COMMENTS:
            return action.data;

        default:
            return state;
    }

};

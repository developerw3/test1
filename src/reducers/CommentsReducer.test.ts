import commentsReducer from './CommentsReducer';
import IComments from '../models/Comments';
import ICommentsAction from './ICommentsAction';
import { GET_STORY_COMMENTS, DELETE_STORY_COMMENTS } from '../actionTypes/CommentsActionTypes';

let initialState: IComments; 

describe('Comments reducer', () => {

    beforeAll(() => {

        initialState = []; 
    });

    it('Should return the initial state', () => {

        const action: ICommentsAction = {
            type: '',
            data: [],
        }

        expect(commentsReducer(initialState, action)).toEqual(initialState);

    });

    it('Should get story comments', () => {

        const action: ICommentsAction = {
            type: GET_STORY_COMMENTS,
            data: [
                {
                    id: '34232423',
                    by: 'Author 1',
                    text: 'wqoeiweqe weooiweowoieweoe',
                },
                {
                    id: '1193949373',
                    by: 'Author 2',
                    text: 'sxsdmsd wewje weooiweowoieweoe',
                }
            ],
        }

        expect(commentsReducer(initialState, action)).toEqual(action.data);

    });

    it('Should delete story comments', () => {

        const action: ICommentsAction = {
            type: DELETE_STORY_COMMENTS,
            data: null as any,
        }

        expect(commentsReducer(initialState, action)).toEqual(action.data);

    });

});



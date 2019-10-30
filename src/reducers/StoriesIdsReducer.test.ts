import storiesIdsReducer from './StoriesIdsReducer';
import IStoriesIdsAction from './IStoriesIdsAction';
import IStoriesIds from '../models/StoriesIds';
import { GET_STORIES_IDS, DELETE_STORIES_IDS } from '../actionTypes/StoriesActionTypes';

let initialState: IStoriesIds; 

describe('StoriesIds reducer', () => {

    beforeAll(() => {

        initialState = []; 
    });

    it('Should return the initial state', () => {

        const action: IStoriesIdsAction = {
            type: '',
            data: [],
        }

        expect(storiesIdsReducer(initialState, action)).toEqual(initialState);

    });

    it('Should get stories ids', () => {

        const action: IStoriesIdsAction = {
            type: GET_STORIES_IDS,
            data: [3423242, 1193949],
        }

        expect(storiesIdsReducer(initialState, action)).toEqual(action.data);

    });

    it('Should delete stories ids', () => {

        const action: IStoriesIdsAction = {
            type: DELETE_STORIES_IDS,
            data: null as any,
        }

        expect(storiesIdsReducer(initialState, action)).toEqual(action.data);

    });

});

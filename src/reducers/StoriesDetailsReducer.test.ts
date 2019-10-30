import storiesDetailsReducer from './StoriesDetailsReducer';
import IStoriesDetailsAction from './IStoriesDetailsAction';
import IStoriesDetails from '../models/StoriesDetails';
import { GET_STORIES_DETAILS, DELETE_STORIES_DETAILS } from '../actionTypes/StoriesActionTypes';

let initialState: IStoriesDetails; 

describe('StoriesDetails reducer', () => {

    beforeAll(() => {

        initialState = []; 
    });

    it('Should return the initial state', () => {

        const action: IStoriesDetailsAction = {
            type: '',
            data: [],
        }

        expect(storiesDetailsReducer(initialState, action)).toEqual(initialState);

    });

    it('Should get stories details', () => {

        const action: IStoriesDetailsAction = {
            type: GET_STORIES_DETAILS,
            data: [
                {
                    id: '8473847384',
                    by: 'Author 1',
                    title: 'Title 1',
                    kids: [3223, 4545],
                    time: 3434123,
                    url: 'www.sewwewr.com',
                },
                {
                    id: '3737373930',
                    by: 'Author 1',
                    title: 'Title 1',
                    kids: [455, 232],
                    time: 30293093,
                    url: 'www.sewwewr.com',
                }
            ],
        }

        expect(storiesDetailsReducer(initialState, action)).toEqual(action.data);

    });

    it('Should delete stories details', () => {

        const action: IStoriesDetailsAction = {
            type: DELETE_STORIES_DETAILS,
            data: null as any,
        }

        expect(storiesDetailsReducer(initialState, action)).toEqual(action.data);

    });

});

import { call, put } from 'redux-saga/effects';
import IStoriesIdsAction from '../reducers/IStoriesIdsAction';
import { fetchTopTenStories, deleteStoriesIds } from './StoriesSaga';

/**
 * Simple saga tests
 * we can do a full saga test for each generator function
 */
describe('Stories Saga', () => {

    it('fetchTopTenStories should get 10 first stories', () => {

        const action: IStoriesIdsAction =  {
            type: 'GET_STORIES_IDS',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        };

        const fetch = fetchTopTenStories(action);

        expect(fetch.next().value.length).toEqual(10);

    });

    it('deleteStoriesIds', () => {

        const del = deleteStoriesIds();

        expect(del.next().value).toEqual(put({ type: 'DELETE_STORIES_IDS', data: null }));
    });

});

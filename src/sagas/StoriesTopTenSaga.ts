import { takeEvery } from 'redux-saga/effects';
import { fetchTopTenStories } from './StoriesSaga';
import { GET_STORIES_IDS } from '../actionTypes/StoriesActionTypes';

export default function* getTopTenStories() {

    yield takeEvery(GET_STORIES_IDS, fetchTopTenStories);   
}

import { call, put, all } from 'redux-saga/effects';
import { getStories, getDataTypeById } from '../api/api';
import IStoriesIdsAction from '../reducers/IStoriesIdsAction';
import { GET_STORY_COMMENTS, DELETE_STORY_COMMENTS } from '../actionTypes/CommentsActionTypes';
import { GET_STORIES_IDS, DELETE_STORIES_IDS, GET_STORIES_DETAILS, DELETE_STORIES_DETAILS } from '../actionTypes/StoriesActionTypes';

export function* getStoriesIds() {

    try {
        let data = yield call(getStories);

        data = yield data.data;

        yield put({ type: GET_STORIES_IDS, data });

    } catch(error) {

        yield put({ type: GET_STORIES_IDS, data: [] });
    }
}

export function* deleteStoriesIds() {

    yield put({ type: DELETE_STORIES_IDS, data: null });
}

export function* deleteStoriesDetails() {

    yield put({ type: DELETE_STORIES_DETAILS, data: null });
}

export function* getDataTypeByIdSaga(id: number) {

    try {
        const data = yield call(getDataTypeById, id);

        return data.data;

    } catch(error) {

        return {};
    }
}

export function* getDataTypeFromPagination(dataIds: number[]) {

    const data = yield all(dataIds.map((id: number) => {
        return call(getDataTypeByIdSaga, id);
    }));

    yield put({ type: GET_STORIES_DETAILS, data });
}

export function* fetchTopTenStories(action: IStoriesIdsAction) {

    const data = yield action.data.slice(0, 10);
    
    yield call(getDataTypeFromPagination, data);
}

export function* fetchTopTwentyComments(storyId: number) {

    const story = yield call(getDataTypeByIdSaga, storyId);

    let data = yield [];

    if(story && story.kids) {

        data = yield all(story.kids.map((id: number) => {
            return call(getDataTypeByIdSaga, id);
        }));
        
        data = yield data.slice(0, 20); 
    }

    yield put({ type: GET_STORY_COMMENTS, data });
}

export function* deleteComments() {

    yield put({ type: DELETE_STORY_COMMENTS, data: null });
}

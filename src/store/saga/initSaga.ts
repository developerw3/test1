import { SagaMiddleware } from 'redux-saga';
import * as StoriesTopTenSaga from '../../sagas/StoriesTopTenSaga';

const rootSaga = [
    StoriesTopTenSaga,
];

export const initSagas = (sagaMiddleware: SagaMiddleware) => {
    
    rootSaga.forEach((saga) => {
        Object.values(saga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    });
};

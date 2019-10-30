import { createBrowserHistory } from 'history';
import { createStore, Store } from 'redux';
import createRootReducer from '../reducers/RootReducer';
import compose, { saga } from './middleware/ComposeMiddlewares';
import { initSagas } from './saga/initSaga';


export const history = createBrowserHistory();

const initialState = {
    stories: {
        storiesIds: null,
        storiesDetails: null,
    },
    comments: null,
};

const store: Store = createStore(
    createRootReducer(history),
    initialState,
    compose,
);

export default store;

initSagas(saga);

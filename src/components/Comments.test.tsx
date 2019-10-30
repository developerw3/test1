import React from 'react';
import renderer from 'react-test-renderer';
import Comments from './Comments';
import mockStore from '../tests/helpers/mockStore';
import { Provider } from 'react-redux';

jest.mock('../store/saga/injectSaga');

describe('Comments Component', () => {

    it('Should render a spinner', () => {

        const props = {
            comments: null as any,
            match: { 
                params: {
                    id: 232724928,
                }
            }
        };

        const store = {
            comments: null as any,
        };

        const tree = renderer
            .create(<Provider store={mockStore(store)}><Comments {...props} /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render there is no comments for this story', () => {

        const props = {
            comments: [],
            match: { 
                params: {
                    id: 432944885,
                }
            }
        };

        const store = {
            comments: [],
        };

        const tree = renderer
            .create(<Provider store={mockStore(store)}><Comments {...props} /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render 2 comments', () => {

        const props = {
            comments: [
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
            match: { 
                params: {
                    id: 998928329,
                }
            }
        };

        const store = {
            comments: [
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
        };
        const tree = renderer
            .create(<Provider store={mockStore(store)}><Comments {...props} /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});

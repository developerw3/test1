import React from 'react';
import renderer from 'react-test-renderer';
import Stories from './Stories';
import mockStore from '../tests/helpers/mockStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../store/saga/injectSaga');

describe('Stories Component', () => {

    it('Should render a spinner', () => {

        const props = {
            stories: {
                storiesIds: null as any,
                storiesDetails: null as any,
            }
        };

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Stories {...props} /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render there is no stories available', () => {

        const props = {
            stories: {
                storiesIds: [],
                storiesDetails: [],
            }
        };

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Stories {...props} /></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render 3 stories', () => {

        const props = {
            stories: {
                storiesIds: [111, 222, 333],
                storiesDetails: [
                    {
                        id: '111',
                        by: 'Author 1',
                        title: 'Title 1',
                        kids: [3223, 4545],
                        time: 3434123,
                        url: 'www.sewwewr.com',
                    },
                    {
                        id: '222',
                        by: 'Author 2',
                        title: 'Title 2',
                        kids: [55777, 454445, 334232],
                        time: 1233344,
                        url: 'www.oirererio.com',
                    },
                    {
                        id: '333',
                        by: 'Author 3',
                        title: 'Title 3',
                        kids: [233223, 104545, 29323, 29382398, 81837239, 1212],
                        time: 3434123,
                        url: 'www.weoiks.com',
                    }
                ],
            }
        };

        const tree = renderer
            .create(<Provider store={mockStore(props)}><Router><Stories {...props} /></Router></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});

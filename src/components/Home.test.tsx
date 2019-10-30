import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

describe('Home Component', () => {

    it('Should render <h1>Home</h1>', () => {

        const wrapper = mount(<Home />);

        expect(wrapper.contains([<h1>Home</h1>])).toEqual(true);
    });

});

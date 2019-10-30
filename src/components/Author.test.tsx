import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Author from './Author';

let wrapper: ReactWrapper;

describe('Author Component', () => {

    beforeAll(() => {

        wrapper = mount(<Author />);
    });

    it('Should contain Hamza Chorfi', () => {

        expect(wrapper.contains('Hamza Chorfi')).toEqual(true);
    });

    it('Should contain 514-260-2649', () => {

        expect(wrapper.contains('514-260-2646')).toEqual(true);
    });

    it('Should contain developerw3@gmail.com', () => {

        expect(wrapper.contains('developerw3@gmail.com')).toEqual(true);
    });

});

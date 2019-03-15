import React from 'react';
import {mount, shallow} from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
    it('renders Footer without crashing', () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper).toBeDefined();
    });

    it('should have a © AUTO1 Group 2018 text inside div', () => {
        const wrapper = mount(<Footer/>);
        expect(wrapper.find('div').text()).toBe('© AUTO1 Group 2018');
    });
});




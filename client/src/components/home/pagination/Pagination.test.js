import React from 'react';
import {shallow} from 'enzyme';
import Pagination from "./Pagination";

describe('Pagination Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Pagination/>);
        expect(wrapper).toBeDefined();
    });
});




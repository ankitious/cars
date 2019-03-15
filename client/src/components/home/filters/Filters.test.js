import React from 'react';
import {mount, shallow} from 'enzyme';
import Filters, {mapDispatchToProps} from "./Filters";

describe('Filters Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Filters />);
        expect(wrapper).toBeDefined();
    });
});





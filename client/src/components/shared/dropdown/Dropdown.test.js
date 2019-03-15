import React from 'react';
import {mount, shallow} from 'enzyme';
import Dropdown from './Dropdown';
import {colors} from "../../../utility/constants/colors";

describe('Dropdown Component', () => {
    it('renders Dropdown without crashing', () => {
        const wrapper = shallow(<Dropdown/>);
        expect(wrapper).toBeDefined();
    });


    it('onToggle should executed', () => {
        const wrapper = mount(<Dropdown list={colors} name="Color" placeholder="Select a color"/>);
        wrapper.instance().onToggle();
        expect(wrapper.instance().state.isOpen).toBeTruthy();
    });
});




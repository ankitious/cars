import React from "react";
import {shallow} from "enzyme/build";
import Home from "./Home";


describe('Home Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Filters')).toBeDefined();
        expect(wrapper.find('Section')).toBeDefined();
    });
});

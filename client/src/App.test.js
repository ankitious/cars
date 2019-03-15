import React from "react";
import {shallow} from "enzyme/build";
import App from "./App";


describe('App Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Header')).toBeDefined();
        expect(wrapper.find('Routes')).toBeDefined();
        expect(wrapper.find('Footer')).toBeDefined();
    });
});

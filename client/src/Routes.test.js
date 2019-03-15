import React from "react";
import {shallow} from "enzyme/build";
import Routes from "./Routes";

describe('App Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Routes/>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Switch')).toBeDefined();
        expect(wrapper.find('Route')).toBeDefined();
    });
});

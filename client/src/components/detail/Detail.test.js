import React from "react";
import {shallow} from "enzyme/build";
import Detail, {mapStateToProps} from "./Detail";

describe('Detail Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Detail/>);
        expect(wrapper).toBeDefined();
    });
});

describe('mapStateToProps' , () => {
    it('should return the right value', () => {
        const state = {car: {fetching: false, error: null, car: [{name: 'Audi'}]}};
        const data = mapStateToProps(state);
        expect(data).toBeDefined();
        expect(data).toMatchObject({fetching: false, error: null, car: [{name: 'Audi'}]});
    });
});

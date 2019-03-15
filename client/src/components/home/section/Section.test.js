import React from 'react';
import {shallow} from 'enzyme';
import Section, {mapStateToProps} from "./Section";

describe('Section Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Section/>);
        expect(wrapper).toBeDefined();
    });
});

describe('mapStateToProps' , () => {
    it('should return the right value', () => {
        const state = { cars : { fetching : false, error : null ,cars : [ {name : 'Audi'}]}};
        const data = mapStateToProps(state);
        expect(data).toBeDefined();
        expect(data).toMatchObject({ fetching : false, error : null ,cars : [{name : 'Audi'}]});
    });
});




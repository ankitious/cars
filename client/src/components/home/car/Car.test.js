import React from 'react';
import {shallow} from 'enzyme';
import Car from "./Car";

describe('Car Component', () => {
    it('renders without crashing', () => {
        const cars = {
            stockNumber : '12345',
            modelName : 'Q4',
            manufacturerName : "Audi",
            color : 'white',
            mileage : { number : '12321' , unit : 'km'},
            fuelType : 'solar',
            pictureUrl : 'http://somesite.com/somepicture.jpg'};
        const wrapper = shallow(<Car {...cars} />);
        expect(wrapper).toBeDefined();
    });
});




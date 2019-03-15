import React from "react";
import {shallow} from "enzyme/build";
import DisplayCarDetail from "./DisplayCarDetail";

describe('DisplayCarDetail Component', () => {
    let detail;
    beforeEach(() => {
         detail = { car : {
                stockNumber: '12345',
                modelName: 'Q4',
                manufacturerName: "Audi",
                color: 'white',
                mileage: {number: '12321', unit: 'km'},
                fuelType: 'solar'
            }
        };
    });
    it('renders without crashing', () => {
        const wrapper = shallow(<DisplayCarDetail  {...detail} />);
        expect(wrapper).toBeDefined();
    });

    it('should call setFavourite on favorite click', () => {
        const wrapper = shallow(<DisplayCarDetail {...detail} />);
        wrapper.instance().setFavourite();
        expect(wrapper.instance().state.favorite).toBeTruthy();
    });

    it('should call removeFavourite on favorite click', () => {
        const wrapper = shallow(<DisplayCarDetail {...detail} />);
        wrapper.instance().removeFavourite();
        expect(wrapper.instance().state.favorite).toBeFalsy();
    });
});



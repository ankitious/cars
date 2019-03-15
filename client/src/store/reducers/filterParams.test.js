import filterParams from "./filterParams";
import {CHANGE_PAGE, FILTER_CARS_BY_PARAMS, SORT_BY_MILEAGE} from "../actions/constants";

const initialState = {
    color : null,
    manufacturer : null,
    page : null,
    sort : null,
};

describe('filter params reducer', () => {

    it('returns the initial state', () => {
        expect(filterParams(undefined, {})).toEqual(initialState);
    });

    it('filter cars by color and manufacturer', () => {
        expect(filterParams(initialState, { type: FILTER_CARS_BY_PARAMS, color: 'red', manufacturer : 'BMW' })).toEqual({
            ...initialState,
            color: 'red',
            manufacturer : 'BMW'
        });
    });

    it('should change the page', () => {
        expect(filterParams(initialState, { type: CHANGE_PAGE, page : '4' })).toEqual({
            ...initialState,
            page: '4',
        });
    });

    it('should sort cars by ascending order', () => {
        expect(filterParams(initialState, { type: SORT_BY_MILEAGE, sort : 'asc' })).toEqual({
            ...initialState,
            sort : 'asc',
        });
    });
});

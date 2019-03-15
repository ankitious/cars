import cars from "./cars";
import {FETCH_CARS_FAILURE, FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS} from "../actions/constants";


const initialState = {
    fetching: false,
    cars: {},
    error: null,
};

describe('cars reducer', () => {

    it('returns the initial state', () => {
        expect(cars(undefined, {})).toEqual(initialState);
    });

    it('handle fetch cars request', () => {
        expect(cars(initialState, { type: FETCH_CARS_REQUEST })).toEqual({
            ...initialState,
            fetching: true,
        });
    });

    it('handles fetch cars failure', () => {
        expect(cars(initialState, { type: FETCH_CARS_FAILURE, error : 'Failed to fetch cars' })).toEqual({
            ...initialState,
            error: 'Failed to fetch cars',
        });
    });

    it('handles fetch cars success', () => {
        expect(cars(initialState, { type: FETCH_CARS_SUCCESS, payload : [{ name : 'audi' }, {name : 'ferrari'}] })).toEqual({
            ...initialState,
            cars: [{ name : 'audi' }, {name : 'ferrari'}],
        });
    });
});

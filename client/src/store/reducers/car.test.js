import car from "./car";
import {
    FETCH_CAR_DETAIL_FAILURE,
    FETCH_CAR_DETAIL_REQUEST,
    FETCH_CAR_DETAIL_SUCCESS,
} from "../actions/constants";



const initialState = {
    fetching: false,
    car: {},
    error: null,
};

describe('car reducer', () => {

    it('returns the initial state', () => {
        expect(car(undefined, {})).toEqual(initialState);
    });

    it('handle fetch car detail request', () => {
        expect(car(initialState, { type: FETCH_CAR_DETAIL_REQUEST })).toEqual({
            ...initialState,
            fetching: true,
        });
    });

    it('handles fetch car detail failure', () => {
        expect(car(initialState, { type: FETCH_CAR_DETAIL_FAILURE, error : 'Failed to fetch cars' })).toEqual({
            ...initialState,
            error: 'Failed to fetch cars',
        });
    });

    it('handles fetch car detail success', () => {
        expect(car(initialState, { type: FETCH_CAR_DETAIL_SUCCESS, payload : [{ name : 'audi' }] })).toEqual({
            ...initialState,
            car: [{ name : 'audi' }],
        });
    });
});

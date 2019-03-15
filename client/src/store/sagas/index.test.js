import { call, fork, put, select } from 'redux-saga/effects';
import {getCars, getCar, getParams} from "./index";
import {fetchCars} from "../api/fetchCars";
import {fetchCarFailure, fetchCarsFailure, fetchCarsSuccess, fetchCarSuccess} from "../actions";
import {fetchCar} from "../api/fetchCar";

describe('getCars', () => {
    it('should success if fetchCars is successful', () => {
        const queryString = "";
        const generator = getCars();
        expect(generator.next().value).toEqual(select(getParams));
        expect(generator.next().value).toEqual(call(fetchCars, queryString));
        expect(generator.next(true).value).toEqual(put(fetchCarsSuccess()));
        expect(generator.next().done).toBeTruthy()
    });

    it('should fail if fetchCars is not successful', () => {
        const queryString = "";
        const generator = getCars();
        expect(generator.next().value).toEqual(select(getParams));
        expect(generator.next().value).toEqual(call(fetchCars, queryString));
        expect(generator.next(null).value).toEqual(put(fetchCarsFailure(new TypeError("Cannot read property 'data' of null"))));
        expect(generator.next().done).toBeTruthy();
    });

});

describe('getCar', () => {
    it('should success if fetchCar is successful', () => {
        const action = { stockNumber : '12345'};
        const generator = getCar(action);
        expect(generator.next().value).toEqual(call(fetchCar, '12345'));
        expect(generator.next(true).value).toEqual(put(fetchCarSuccess()));
        expect(generator.next().done).toBeTruthy()
    });

    it('should fail if fetchCar is not successful', () => {
        const action = { stockNumber : '12345'};
        const generator = getCar(action);
        expect(generator.next().value).toEqual(call(fetchCar, '12345'));
        expect(generator.next(null).value).toEqual(put(fetchCarFailure(new TypeError("Cannot read property 'data' of null"))));
        expect(generator.next().done).toBeTruthy();
    });

});

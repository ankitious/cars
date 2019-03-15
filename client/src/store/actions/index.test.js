import {
    changePage,
    fetchCar,
    fetchCarFailure,
    fetchCars,
    fetchCarsFailure,
    fetchCarsSuccess,
    fetchCarSuccess,
    filterCarsByParams, sortByMileage
} from "./index";
import {
    CHANGE_PAGE,
    FETCH_CAR_DETAIL_FAILURE,
    FETCH_CAR_DETAIL_REQUEST,
    FETCH_CAR_DETAIL_SUCCESS,
    FETCH_CARS_FAILURE,
    FETCH_CARS_REQUEST,
    FETCH_CARS_SUCCESS,
    FILTER_CARS_BY_PARAMS,
    SORT_BY_MILEAGE
} from "./constants";

describe('fetchCars', () => {
    it('returns FETCH_CARS_REQUEST in object', () => {
        const data = fetchCars();
        expect(data).toBeDefined();
        expect(data).toMatchObject({type : FETCH_CARS_REQUEST})
    });
});

describe('fetchCarsSuccess', () => {
    it('returns FETCH_CARS_SUCCESS with cars in object', () => {
        const data = fetchCarsSuccess([{name : 'Audi'}, {name : 'BMW'}]);
        expect(data).toBeDefined();
        expect(data).toMatchObject({type : FETCH_CARS_SUCCESS, payload : [{name : 'Audi'}, {name : 'BMW'}]})
    });
});

describe('fetchCarsFailure', () => {
    it('returns FETCH_CARS_FAILURE with error in object', () => {
        const data = fetchCarsFailure('failed to fetch cars');
        expect(data).toBeDefined();
        expect(data).toMatchObject({type : FETCH_CARS_FAILURE, error : 'failed to fetch cars'});
    });
});

describe('fetchCar', () => {
    it('returns FETCH_CAR_DETAIL_REQUEST in object', () => {
        const data = fetchCar();
        expect(data).toBeDefined();
        expect(data).toMatchObject({type : FETCH_CAR_DETAIL_REQUEST})
    });
});

describe('fetchCarsSuccess', () => {
    it('returns FETCH_CAR_DETAIL_SUCCESS with car detail in object', () => {
        const data = fetchCarSuccess([{name : 'Audi'}]);
        expect(data).toBeDefined();
        expect(data).toMatchObject({type : FETCH_CAR_DETAIL_SUCCESS, payload : [{name : 'Audi'}]})
    });
});

describe('fetchCarFailure', () => {
    it('returns FETCH_CAR_DETAIL_FAILURE with error in object', () => {
        const data = fetchCarFailure('failed to fetch car details');
        expect(data).toBeDefined();
        expect(data).toMatchObject({type : FETCH_CAR_DETAIL_FAILURE, error : 'failed to fetch car details'});
    });
});

describe('filterCarsByParams', () => {
    it('returns FILTER_CARS_BY_PARAMS in object', () => {
        const color = "red";
        const manufacturer = "BMW";
        const data = filterCarsByParams(color,manufacturer);
        expect(data).toBeDefined();
        expect(data).toMatchObject({type : FILTER_CARS_BY_PARAMS, color : "red",manufacturer : "BMW"})
    });
});

describe('changePage', () => {
    it('returns CHANGE_PAGE with next page number', () => {
        const page = 3;
        const data = changePage(page);
        expect(data).toBeDefined();
        expect(data).toMatchObject({type : CHANGE_PAGE, page : 3})
    });
});

describe('sortByMileage', () => {
    it('returns SORT_BY_MILEAGE with asc or des value in object', () => {
        const sort = 'asc';
        const data = sortByMileage(sort);
        expect(data).toBeDefined();
        expect(data).toMatchObject({type : SORT_BY_MILEAGE, sort : 'asc'});
    });
});

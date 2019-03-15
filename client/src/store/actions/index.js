import {
    CHANGE_PAGE, FETCH_CAR_DETAIL_FAILURE, FETCH_CAR_DETAIL_REQUEST, FETCH_CAR_DETAIL_SUCCESS,
    FETCH_CARS_FAILURE,
    FETCH_CARS_REQUEST,
    FETCH_CARS_SUCCESS,
    FILTER_CARS_BY_PARAMS, SORT_BY_MILEAGE
} from "./constants";

export function fetchCars() {
    return {
        type: FETCH_CARS_REQUEST
    }
}

export function fetchCarsSuccess(cars) {
    return {
        type: FETCH_CARS_SUCCESS,
        cars,
    }
}

export function fetchCarsFailure(error) {
    return {
        type: FETCH_CARS_FAILURE,
        error,
    }
}

export function fetchCar(stockNumber) {
    return {
        type: FETCH_CAR_DETAIL_REQUEST,
        stockNumber
    }
}

export function fetchCarSuccess(car) {
    return {
        type: FETCH_CAR_DETAIL_SUCCESS,
        car,
    }
}

export function fetchCarFailure(error) {
    return {
        type: FETCH_CAR_DETAIL_FAILURE,
        error,
    }
}

export function filterCarsByParams(color, manufacturer) {
    return {
        type: FILTER_CARS_BY_PARAMS,
        color,
        manufacturer,
    }
}
export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page,
    }
}

export function sortByMileage(sort) {
    return {
        type: SORT_BY_MILEAGE,
        sort
    }
}




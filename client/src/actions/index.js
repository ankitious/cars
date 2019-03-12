import {
    CHANGE_PAGE,
    FETCH_CARS_FAILURE,
    FETCH_CARS_REQUEST,
    FETCH_CARS_SUCCESS,
    FILTER_CARS_BY_PARAMS
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




import {FETCH_CARS_FAILURE, FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS} from "./constants";

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




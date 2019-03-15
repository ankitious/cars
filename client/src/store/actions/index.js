import {
    CHANGE_PAGE, FETCH_CAR_DETAIL_FAILURE, FETCH_CAR_DETAIL_REQUEST, FETCH_CAR_DETAIL_SUCCESS,
    FETCH_CARS_FAILURE,
    FETCH_CARS_REQUEST,
    FETCH_CARS_SUCCESS,
    FILTER_CARS_BY_PARAMS, SORT_BY_MILEAGE
} from "./constants";

export const fetchCars = () => ({
        type: FETCH_CARS_REQUEST
});


export const fetchCarsSuccess = (payload) => ({
        type: FETCH_CARS_SUCCESS,
        payload,
});


export const fetchCarsFailure = (error) => ({
        type: FETCH_CARS_FAILURE,
        error,
});


export const fetchCar = (stockNumber) => ({
        type: FETCH_CAR_DETAIL_REQUEST,
        stockNumber
});

export const fetchCarSuccess = (payload) => ({
        type: FETCH_CAR_DETAIL_SUCCESS,
        payload,
});

export const fetchCarFailure = (error) => ({
        type: FETCH_CAR_DETAIL_FAILURE,
        error,
});

export const filterCarsByParams = (color, manufacturer) => ({
        type: FILTER_CARS_BY_PARAMS,
        color,
        manufacturer,
});
export const changePage = (page) =>  ({
        type: CHANGE_PAGE,
        page,
});

export const sortByMileage = (sort) => ({
        type: SORT_BY_MILEAGE,
        sort,
});




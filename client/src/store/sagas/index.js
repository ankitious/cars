import { takeLatest, call, put, fork, select } from 'redux-saga/effects';
import {fetchCarsSuccess, fetchCarsFailure, fetchCarSuccess, fetchCarFailure} from '../actions/index';
import { fetchCars } from '../api/fetchCars';
import {
    CHANGE_PAGE,
    FETCH_CAR_DETAIL_REQUEST,
    FETCH_CARS_REQUEST,
    FILTER_CARS_BY_PARAMS,
    SORT_BY_MILEAGE
} from '../actions/constants';
import {fetchCar} from "../api/fetchCar";
import {sanitizeParams} from "../../utility";

export const getParams = (state) => state.filterParams;

export function* getCars() {
    try {
        let params = yield select(getParams);
        const queryString = sanitizeParams(params);
        const response = yield call(fetchCars, queryString);
        yield put(fetchCarsSuccess(response.data));
    } catch(err) {
        yield put(fetchCarsFailure(err));
    }
}

export function* getCar({stockNumber}) {
    try {
        const response = yield call(fetchCar, stockNumber);
        yield put(fetchCarSuccess(response.data));
    } catch(err) {
        yield put(fetchCarFailure(err));
    }
}

function* watchGetCars() {
    yield takeLatest(FETCH_CARS_REQUEST, getCars);
    yield takeLatest(FILTER_CARS_BY_PARAMS, getCars);
    yield takeLatest(CHANGE_PAGE, getCars);
    yield takeLatest(SORT_BY_MILEAGE, getCars);
}
function* watchGetCar() {
    yield takeLatest(FETCH_CAR_DETAIL_REQUEST, getCar);
}

export default function* rootSaga() {
    yield fork(watchGetCars);
    yield fork(watchGetCar);
}

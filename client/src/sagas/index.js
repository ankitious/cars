import { takeLatest, call, put, fork, select } from 'redux-saga/effects';
import {fetchCarsSuccess, fetchCarsFailure, fetchCarSuccess, fetchCarFailure} from '../store/actions';
import { fetchCars } from '../api/fetchCars';
import {
    CHANGE_PAGE,
    FETCH_CAR_DETAIL_REQUEST,
    FETCH_CARS_REQUEST,
    FILTER_CARS_BY_PARAMS,
    SORT_BY_MILEAGE
} from '../store/actions/constants';
import * as queryString from "query-string";
import {compose} from "ramda";
import {haveValues, removeNulls} from "../utility";
import {fetchCar} from "../api/fetchCar";

const getParams = (state) => { console.log(state); return state.filterParams };

const sanitizeParams = (params) => {
    return(
        haveValues(params) ?
           compose(queryString.stringify,removeNulls)(params) : "");
};

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

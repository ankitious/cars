import { takeLatest, call, put, fork, select } from 'redux-saga/effects';
import { fetchCarsSuccess, fetchCarsFailure } from '../actions';
import { fetchCars } from '../api/fetchCars';
import {CHANGE_PAGE, FETCH_CARS_REQUEST, FILTER_CARS_BY_PARAMS} from '../actions/constants';
import * as queryString from "query-string";
import {compose} from "ramda";
import {haveValues, removeNulls} from "../utility";

const getParams = (state) => state.filterParams;

const sanitizeParams = (params) => {
    return(
        haveValues(params) ?
           compose(queryString.stringify,removeNulls)(params) : undefined);
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

function* watchGetCars() {
    yield takeLatest(FETCH_CARS_REQUEST, getCars);
}

function* watchFilterByParams() {
    yield takeLatest(FILTER_CARS_BY_PARAMS, getCars);
}
function* watchChangePage() {
    yield takeLatest(CHANGE_PAGE, getCars);
}

export default function* rootSaga() {
    yield fork(watchGetCars);
    yield fork(watchFilterByParams);
    yield fork(watchChangePage);
}

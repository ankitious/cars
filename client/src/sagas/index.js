import { takeLatest, call, put, fork } from 'redux-saga/effects';
import { fetchCarsSuccess, fetchCarsFailure } from '../actions';
import { fetchCars } from '../api/fetchCars';
import { FETCH_CARS_REQUEST } from '../actions/constants';

export function* getCars() {
    try {
        const response = yield call(fetchCars);
        yield put(fetchCarsSuccess(response.data));
    } catch(err) {
        yield put(fetchCarsFailure(err));
    }
}

function* watchGetCars() {
    yield takeLatest(FETCH_CARS_REQUEST, getCars);
}

export default function* rootSaga() {
    yield fork(watchGetCars);
}

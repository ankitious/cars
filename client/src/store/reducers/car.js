import {always, evolve} from 'ramda';
import {
    FETCH_CAR_DETAIL_FAILURE,
    FETCH_CAR_DETAIL_REQUEST, FETCH_CAR_DETAIL_SUCCESS,
} from "../actions/constants";

const initialState = {
    fetching: false,
    car: {},
    error: null,
};

export default (state = initialState, action) => {
    const { type, car, error } = action;
    switch (type) {
        case FETCH_CAR_DETAIL_REQUEST:
            return evolve({
                    fetching : always(true),
                },
                state
            );
        case FETCH_CAR_DETAIL_SUCCESS:
            return evolve({
                    fetching : always(false),
                    car : always(car),
                    error : always(null),
                },
                state
            );
        case FETCH_CAR_DETAIL_FAILURE:
            return evolve( {
                    fetching : always(false),
                    error : always(error)
                },
                state
            );
        default:
            return state;
    }
}


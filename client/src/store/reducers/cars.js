import {always, evolve} from 'ramda';
import {FETCH_CARS_FAILURE, FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS} from "../actions/constants";

const initialState = {
    fetching: false,
    cars: {},
    error: null,
};

export default (state = initialState, action) => {
    const { type, cars, error } = action;
    switch (type) {
        case FETCH_CARS_REQUEST:
            return evolve({
                fetching : always(true),
                },
                state
            );
        case FETCH_CARS_SUCCESS:
            return evolve({
                fetching : always(false),
                cars : always(cars),
                error : always(null)
            },
                state
            );
        case FETCH_CARS_FAILURE:
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


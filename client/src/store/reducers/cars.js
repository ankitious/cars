import {FETCH_CARS_FAILURE, FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS} from "../actions/constants";

const initialState = {
    fetching: false,
    cars: {},
    error: null,
};

export default (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case FETCH_CARS_REQUEST:
            return {...state, fetching : true};
        case FETCH_CARS_SUCCESS:
            return { ...state, fetching : false, cars : payload, error : null};
        case FETCH_CARS_FAILURE:
            return { ...state, fetching : false, error };
        default:
            return state;
    }
}


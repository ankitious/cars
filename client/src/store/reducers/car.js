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
    const { type, payload, error } = action;
    switch (type) {
        case FETCH_CAR_DETAIL_REQUEST:
            return { ...state, fetching : true };
        case FETCH_CAR_DETAIL_SUCCESS:
            return { ...state, fetching : false, car : payload, error : null };
        case FETCH_CAR_DETAIL_FAILURE:
            return { ...state, fetching : false, error };
        default:
            return state;
    }
}


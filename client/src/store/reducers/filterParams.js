import {CHANGE_PAGE, FILTER_CARS_BY_PARAMS, SORT_BY_MILEAGE} from "../actions/constants";

const initialState = {
    color : null,
    manufacturer : null,
    page : null,
    sort : null,
};

export default (state = initialState, action) => {
    const { type, color, manufacturer, page, sort } = action;
    switch (type) {
        case FILTER_CARS_BY_PARAMS:
            return { ...state, color , manufacturer, page : null };
        case CHANGE_PAGE:
            return { ...state, page };
        case SORT_BY_MILEAGE:
            return { ...state, sort };
        default:
            return state;
    }
}


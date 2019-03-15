import {always, evolve} from 'ramda';
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
            return evolve({
                    color : always(color),
                    manufacturer : always(manufacturer),
                    page : always(null),
                },
                state
            );
        case CHANGE_PAGE:
            return evolve({
                    page : always(page),
                },
                state
            );
        case SORT_BY_MILEAGE:
            return evolve({
                    sort : always(sort),
                },
                state
            );
        default:
            return state;
    }
}


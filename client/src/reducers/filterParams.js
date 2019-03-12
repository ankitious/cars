import {always, evolve} from 'ramda';
import {CHANGE_PAGE, FILTER_CARS_BY_PARAMS} from "../actions/constants";

const initialState = {
    color : null,
    manufacturer : null,
    page : null
};

export default (state = initialState, action) => {
    const { type, color, manufacturer, page } = action;
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
        default:
            return state;
    }
}


import { combineReducers } from 'redux';
import cars from "./cars";
import filterParams from "./filterParams";

const rootReducer = combineReducers({ cars, filterParams });

export default rootReducer;
